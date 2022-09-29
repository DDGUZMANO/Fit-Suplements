import React from 'react';


const CartItem = ({item}) =>{
    return(
        <>
            <h2>{item.quantity}</h2>
            <h2>{item.title}</h2>
        </>   
        
    )

}

export default CartItem;