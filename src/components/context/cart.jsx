import React from 'react';
import { useCartContext } from './CartContext';
import CartItem from './cartItem';


const Cart = () =>{

    const {carrito} = useCartContext()
    console.log(carrito)
    return carrito.map(element=><CartItem item = {element}/>)
}

export default Cart