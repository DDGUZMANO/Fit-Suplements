import React, {useState, useContext} from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addProduct = (producto, newQuantity) =>{

        const anterior = parseInt(isInCart(producto.id))

        
        if(anterior){
            const arreglo = carrito.filter((e) => e.id !== producto.id);
            producto.quantity = newQuantity + anterior.quantity;
            arreglo.push(producto);
            setCarrito(arreglo)

        }
        else{
            const newCarrito = carrito.filter(prod=>prod.id !==producto.id);
            newCarrito.push({...producto, quantity:newQuantity});
            setCarrito(newCarrito)
        }
    
        
    }

    console.log('carrito', carrito)

    const clearCart = () => setCarrito([])
    

    const isInCart = (id) =>
            carrito.find(producto => producto.id===id) ? true : false;
    

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