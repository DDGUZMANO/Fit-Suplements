
import { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";

const ItemListContainer = () => {

const [productos, setProductos] = useState([]);

const buscarProductos = async () => {

    try {
    const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=suplementos"
    );
    const data = await response.json();
    setProductos(data.results);
    } catch (e) {
    console.log("hay un error ");
    }
};

useEffect(() => {

    buscarProductos();

}, []);

console.log(productos)

return (
    <ItemList productos = {productos}/>
    
    );

};

export default ItemListContainer;
