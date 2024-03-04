import { useEffect, useState } from "react";

const Input = ({ initialValue, changeInitialValue }) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    changeInitialValue(value);
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type To Do Item Name"
    />
  );
};
export default Input;
