import React from 'react';


const CartItem = ({item}) =>{
    return(
        <>
            <h2>{item.quantity} - {item.title}</h2>
            
        </>   
        
    )

}

export default CartItem;