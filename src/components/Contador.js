import { useState } from "react";

const Contador = () => {
   
    const [contador, setContador] = useState(0);
  
    const sumar = () => setContador((prevState) => prevState + 1);
    const restar = () => setContador((prevState) => prevState - 1);
    const reiniciar = () => setContador(0);

    return (
        <>
            <div style={{display: "flex"}}>
                <button onClick={sumar}>+</button>
                <h3>{contador}</h3>
                <button onClick={restar}>-</button>
                <button onClick={reiniciar}>Reset</button>
            </div>
        </>
     );
}
 
export default Contador;
