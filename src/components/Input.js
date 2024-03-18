import { forwardRef, memo, useEffect, useState } from "react";

const Input = forwardRef(({ initialValue, changeInitialValue }, ref) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    changeInitialValue(value);
  }, [value, changeInitialValue]);

  return (
    <>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type To Do Item Name"
      />
    </>
  );
});
export default memo(Input);
