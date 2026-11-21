import { useReducer } from "react";

type State = {
  count: number;
  step: number;
};

type Action = {
  type: "increment" | "decrement" | "reset" | "set_step";
  payload?: number;
};

const initialState: State = { count: 0, step: 1 };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "set_step":
      return { ...state, step: action.payload! };
    default:
      return state;
  }
}

export default function StepCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>

      <label>
        Step:{" "}
        <input
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "set_step", payload: Number(e.target.value) || 1 })
          }
        />
      </label>

      <div>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          -{state.step}
        </button>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          +{state.step}
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}
