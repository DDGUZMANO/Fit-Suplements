import React,{useState,useEffect} from 'react';
import { useCartContext } from './CartContext';
import CartItem from './cartItem';


const Cart = () =>{

    const {carrito,clearCart,total} = useCartContext()

    const [precioTotal,setPrecioTotal]=useState(0);

    useEffect(()=>{
        setPrecioTotal(total())

    },[carrito]

    )
    console.log(carrito)
    return (
        <>
        {carrito.length >0 ?
        (<>
        {carrito.map(element => <CartItem item = {element}/>)}
        <button className="bg-blue-900 rounded-sm" onClick={clearCart}> vaciar carrito</button>
        <h2>{precioTotal}</h2>
        </>)
        : (<h2>Tu Carrito esta vacio</h2>)}
        </>
        )
}

export default Cart