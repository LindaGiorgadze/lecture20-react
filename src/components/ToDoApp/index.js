import { useEffect, useState } from "react";
import Button from "../Button";
import styles from "../../styles/Button.module.scss";
import Input from "../Input";

const ToDoApp = () => {
  const toDoList = [
    {
      id: 1,
      text: "lorem",
      checked: false
    },
    {
      id: 2,
      text: "lorem 2",
      checked: true
    },
    {
      id: 3,
      text: "lorem 3",
      checked: false
    }
  ];
  const [list, setList] = useState(
    JSON.parse(sessionStorage.getItem("list")) || []
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(list));
    console.log(list);
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
          <Input initialValue={value} changeInitialValue={setValue} />
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
