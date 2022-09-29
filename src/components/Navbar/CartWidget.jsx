import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';

const CartWidget = () =>{

    
    

    return(
        <NavLink to = {"/cart"}>
            <button>
                <i className="ri-shopping-cart-2-line"></i>
            </button>
        </NavLink>
    )

};
export default CartWidget;