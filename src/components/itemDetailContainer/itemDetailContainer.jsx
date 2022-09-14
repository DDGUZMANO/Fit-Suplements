import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { useEffect, useState } from "react";




const ItemDetailContainer = () =>{
    const {idd} = useParams()
    const id = solo.id
    const productoSolo = async () => {

        try {
        const response = await fetch(
            `https://api.mercadolibre.com/items/${id}`
        );
        const data = await response.json();
        // const filtrado = data.results.filter((e)=> e.id===id).shift();
        // return filtrado;
        return data;
        // setSolo(data.results);
        } catch (e) {
        console.log("hay un error ");
        }
    };
    const [solo, setSolo] = useState([]);
    
    
    useEffect(()=>{
        const getSolo = new Promise (
            resolve => {
                setTimeout(()=>{
                    resolve(productoSolo())},
                    2000)
                })
                getSolo.then(res => setSolo(res.find(setSolo => setSolo.id === parseInt(idd))))
            },[]
        )
        
    

    


    return (
        
        <ItemDetail solo={solo}/>
    )}


export default ItemDetailContainer;