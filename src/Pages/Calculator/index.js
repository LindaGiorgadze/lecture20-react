import { useReducer, useState } from "react";
import { Button } from "react-bootstrap";

const calculation = (state, action) => {
  switch (action.type) {
    case "change":
      return action.value;
    case "decrement":
      return state - action.value;
    case "increment":
      return state + action.value;
    case "sum":
      return action.value;

    default:
      break;
  }
};

const changeValues = (state, action) => {
  switch (action.type) {
    case "Value1":
      return { ...state, value1: action.value };
      break;

    case "Value2":
      return { ...state, value2: action.value };
      break;

    default:
      break;
  }
  throw Error(`This type doesn't exists`);
};

const Calculator = () => {
  const [values, dispatchValues] = useReducer(changeValues, {
    value1: 0,
    value2: 0
  });
  const [count, dispatch] = useReducer(calculation, 0);
  return (
    <div>
      <input
        type="number"
        value={values.value1}
        onChange={(e) =>
          dispatchValues({
            type: "Value1",
            value: e.target.value ? parseInt(e.target.value) : e.target.value
          })
        }
      />
      <input
        type="number"
        value={values.value2}
        onChange={(e) =>
          dispatchValues({
            type: "Value2",
            value: e.target.value ? parseInt(e.target.value) : e.target.value
          })
        }
      />
      <Button
        onClick={() =>
          dispatch({
            type: "sum",
            value:
              values.value1 && values.value2
                ? parseInt(values.value1) + parseInt(values.value2)
                : 0
          })
        }
      >
        Culculate
      </Button>
      <br />
      <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </Button>
      <input
        type="number"
        value={count}
        onChange={(e) =>
          dispatch({ type: "change", value: parseInt(e.target.value) })
        }
      />
      <Button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </Button>
    </div>
  );
};

export default Calculator;

const CalculatorUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(parseInt(count) - 1)}>-</Button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <Button onClick={() => setCount(parseInt(count) + 1)}>+</Button>
    </div>
  );
};

export { CalculatorUseState };
