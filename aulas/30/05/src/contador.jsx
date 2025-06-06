import './Contador.css'
import { useState } from "react";
import Botoes from "./Botoes";
export default function Contador(){
    const[contador, setContador] = useState(0);
    const incrementar = () => setContador(contador+1);
    const decrementar = () => setContador(contador-1);
    return(
        <div>
            <div id="cont">
                {contador}
            </div>
            <Botoes onIncrement={incrementar} onDecrememt={decrementar}/>
        </div>
    )
}