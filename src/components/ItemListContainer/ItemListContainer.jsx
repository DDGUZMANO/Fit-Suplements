
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";

const ItemListContainer = () => {
    const {id} = useParams()
    console.log(id)

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
