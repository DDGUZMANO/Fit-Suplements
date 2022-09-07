import React from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useEffect, useState } from "react";




const ItemDetailContainer = () =>{
    const productoSolo = async () => {

        try {
        const response = await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=suplementos"
        );
        const data = await response.json();
        setSolo(data.results);
        } catch (e) {
        console.log("hay un error ");
        }
    };
    const [solo, setSolo] = useState([]);
    
    useEffect(()=>{
        const getSolo = new Promise (
            resolve => {
                setTimeout(()=>{
                    resolve(productoSolo)},
                    2000)
                })
                getSolo.then(res => setSolo(res))
            },[]
        )
    

    


    return (
        <ItemDetail solo={solo}/>
    )}


export default ItemDetailContainer;