import styles from "../styles/Button.module.scss";

const Button = ({ ...props }) => {
  console.log(props.className);
  return (
    <button {...props} className={`${styles.button} ${props.className || ""}`}>
      Button
    </button>
  );
};

export default Button;
