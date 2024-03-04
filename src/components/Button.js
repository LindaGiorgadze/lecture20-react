import styles from "../styles/Button.module.scss";

const Button = ({ text, ...props }) => {
  
  return (
    <button {...props} className={`${styles.button} ${props.className || ""}`}>
      {text || "Button"}
    </button>
  );
};

export default Button;
