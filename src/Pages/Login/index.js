import axios from "axios";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseUrl } from "../../components/utils/request";
import AuthContext from "../../Contexts/AuthContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  console.log(username, password);
  return (
    <>
      <h1>Log In Page</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          axios({
            method: "POST",
            url: `${baseUrl}/auth/login`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
              username,
              password
            })
          }).then((res) => {
            setUser(res);
          });
        }}
      >
        <Form.Group className="mb-3 col-6 mx-auto" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 col-6 mx-auto"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="col-6" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;
