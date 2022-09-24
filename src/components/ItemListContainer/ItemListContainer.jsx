
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";

const ItemListContainer = () => {
    const {id} = useParams()
    console.log(id)

const [productos, setProductos] = useState([]);

const {category_id} = useParams();

const buscarProductos = async () => {

    try {

        if(!category_id){
        const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=suplementos"
        );
        const data = await response.json();
        setProductos(data.results);
        }else{
            const response = await fetch(
                `https://api.mercadolibre.com/sites/MLA/search?q=${category_id}`
                );
            const data = await response.json();
            setProductos(data.results);
        }

    } catch (e) {
    console.log("hay un error ");
    }

};

useEffect(() => {

    buscarProductos();
    
}, [category_id]);

console.log(productos)

return (
    <ItemList productos = {productos}/>
    
    );

};


export default ItemListContainer;
