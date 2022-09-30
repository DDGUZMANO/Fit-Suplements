import React, {useState, useContext} from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addProduct = (producto, newQuantity) =>{

        const anterior = isInCart(producto.id)

        
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
            carrito.find(producto => producto.id===id)
    

    const removeProduct = (id) => setCarrito(carrito.filter(product => product.id !==id))

    const total = () =>{
        let monto = 0;
        carrito.forEach((product)=>{monto= monto + product.price * product.quantity;
        })
        return monto;
    }

    





    return(
    <div>
        <CartContext.Provider value = {{clearCart, isInCart, removeProduct, addProduct, carrito, total}}>
            {children}
        </CartContext.Provider>
    </div>
    )
}

export default CartProvider