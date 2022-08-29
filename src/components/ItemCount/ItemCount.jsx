import React,{useState} from 'react';
import './ItemCount.css'

const ItemCount = () =>{
    const [counter, setCounter] = useState(10);

    const restar = () =>{
        setCounter (counter - 1);
    }

    const aumentar = () =>{
        setCounter (counter + 1);
    }

    return (
        
        <div className='contador'>
            <button onClick={restar}>-</button>
            <span>{counter}</span>
            <button onClick={aumentar}>+</button>
            <button onClick={() => {
                setCounter([...counter,"producto"]);
                console.log(counter)
            }}>
                Agregar al carrito
                
            </button>

        </div>
    )
}

export default ItemCount;