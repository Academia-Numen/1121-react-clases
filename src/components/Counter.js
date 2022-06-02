import { useReducer, useState } from "react"
import counterReducer, { ACTIONS } from "../reducers/counterReducer";

export default function Counter() {

    const [counter, dispatch] = useReducer(counterReducer, 0);
    const [value, setValue] = useState(0);

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <h2>{counter}</h2>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: value })}>Sumar</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: value  })}>Restar</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Resetear</button>
        </div>
    )
};