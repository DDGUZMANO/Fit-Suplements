import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartWidget = () =>{

const{carrito}=useCartContext()   
    

    return(
        <>
        { carrito.length > 0 ?
        (<>
        {<NavLink to = {"/cart"}>
            <h2>{carrito.length}</h2>
            <button>
                <i className="ri-shopping-cart-2-line"></i>
            </button>
        </NavLink>}
        </>)
        :(<h2>No hay productos</h2>)}
        </>
    )

};
export default CartWidget;