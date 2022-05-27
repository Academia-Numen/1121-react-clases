import { useReducer } from "react"
import counterReducer, { ACTIONS } from "../reducers/counterReducer";

export default function Counter() {

    const [counter, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Sumar 1</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT  })}>Restar 1</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Resetear</button>
        </div>
    )
};