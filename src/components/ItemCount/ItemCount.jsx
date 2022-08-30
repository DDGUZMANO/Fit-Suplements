import React,{useState} from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) =>{
    const [counter, setCounter] = useState(initial);

    const restar = () =>{
        setCounter (counter - 1);
    }

    const aumentar = () =>{
        setCounter (counter + 1);
    }

    return (
        
        <div className='contador'>
            <button disabled = {counter <= 1} onClick={restar} className='buttonStyle'>-</button>
            <span>{counter}</span>
            <button disabled = {counter >= stock} onClick={aumentar} className='buttonStyle'>+</button>
            <button disable={stock<=0} onClick={()=> onAdd(counter)} className='buttonAddStyle'>
                Agregar al carrito
                
            </button>

        </div>
    )
}

export default ItemCount;