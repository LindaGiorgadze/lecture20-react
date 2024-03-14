import axios from "axios";
import { useCallback, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { baseUrl } from "../../components/utils/request";
import AuthContext from "../../Contexts/AuthContext";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required")
});

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR"
    },
    resolver: useYupValidationResolver(validationSchema)
  });

  const queryClient = useQueryClient();
  const handleLogin = (data) => {
    axios({
      method: "POST",
      url: `${baseUrl}/auth/login`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: data.username,
        password: data.password
      })
    }).then((res) => {
      setUser(res);
    });
  };

  const login = useMutation((data) =>
    handleLogin(data, { onSuccess: queryClient.invalidateQueries("products") })
  );

  return (
    <>
      <h1>Log In Page</h1>
      <Form onSubmit={handleSubmit((data) => login.mutate(data))}>
        <Form.Group className="mb-3 col-6 mx-auto" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            isInvalid={errors?.username}
            type="text"
            placeholder="Enter email"
            {...register("username")}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.username?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-6 mx-auto"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            isInvalid={errors?.password}
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={login.isLoading}
          className="col-6"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;
