import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import styles from "../../styles/Button.module.scss";
import Input from "../Input";

const ToDoApp = () => {
  const mainInputRef = useRef();

  const [list, setList] = useState(
    JSON.parse(sessionStorage.getItem("list")) || []
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    mainInputRef?.current?.focus();
  }, [mainInputRef]);

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: list.length + 1,
      text: value,
      checked: false
    };
    value && setList([...list, newItem]);
    setValue("");
    mainInputRef?.current?.focus();
  };

  const handleCheck = (e) => {
    const newList = list.map((item) => {
      if (item.id === parseInt(e.target.id)) {
        const newItem = {
          id: item.id,
          text: item.text,
          checked: !item.checked
        };
        return newItem;
      } else return item;
    });
    setList(newList);
  };

  return (
    <div className="ToDoApp">
      <h2>To Do App</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <Input
            initialValue={value}
            changeInitialValue={setValue}
            ref={mainInputRef}
          />
          <Button
            type="submit"
            text="Add To Do Item"
            className={styles.TodoButton}
          />
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  name={item.text}
                  id={item.id}
                  checked={item.checked}
                  onChange={handleCheck}
                />
                <label htmlFor={item.id}>{item.text} </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default ToDoApp;
