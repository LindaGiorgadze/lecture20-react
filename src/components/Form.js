import Button from "./Button";
import formStyles from "../styles/Form.module.scss";

const Form = () => {
  return (
    <form action="#" className={formStyles.form}>
      <input type="text" />
      <Button className={formStyles.buttonText} />
    </form>
  );
};

export default Form;