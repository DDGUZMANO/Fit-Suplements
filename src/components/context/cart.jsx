// import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { useCartContext } from './CartContext';
import CartItem from './cartItem';


const Cart = () =>{

    const {carrito,clearCart} = useCartContext()
    console.log(carrito)
    return (
        <>
        {carrito.length >0 ?
        (<>
        {carrito.map(element => <CartItem item = {element}/>)}
        <button className="bg-blue-900" onClick={clearCart}> vaciar carrito</button>
        </>)
        : (<h2>Tu Carrito esta vacio</h2>)}
        </>
        )
}

export default Cart