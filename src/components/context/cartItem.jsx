import React from 'react';
import { useCartContext } from './CartContext';


const CartItem = ({item}) =>{

    const {removeProduct} = useCartContext();

    const handleRemove= () =>{
        removeProduct(item.id)
    }
    return(
        <>
            <h2>{item.quantity} - {item.title}</h2>
            <button className= "bg-slate-600" onClick={handleRemove}>Eliminar Producto</button>
            
        </>   
        
    )

}

export default CartItem;