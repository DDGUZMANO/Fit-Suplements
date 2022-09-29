import React, {useState, useContext} from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addProduct = (item, newQuantity) =>{
        const newCarrito = carrito.filter(prod=>prod.id !==item.id);
        newCarrito.push({...item, quantity:newQuantity});
        setCarrito(newCarrito)
    }

    console.log('carrito', carrito)

    const clearCart = () => setCarrito([])
    

    const isInCart = (id) =>
            carrito.find(product => product.id===id) ? true : false;
    

    const removeProduct = (id) => setCarrito(carrito.filter(product => product.id !==id))


    





    return(
    <div>
        <CartContext.Provider value = {{clearCart, isInCart, removeProduct, addProduct, carrito}}>
            {children}
        </CartContext.Provider>
    </div>
    )
}

export default CartProvider