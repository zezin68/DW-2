import './Botoes.css'
function Botoes({onIncrement,onDecrememt}){
    return(
        <div>
            <button className='oi' onClick={onDecrememt}>-</button>
            <button className='ola' onClick={onIncrement}>+</button>
        </div>
    );
}
export default Botoes;