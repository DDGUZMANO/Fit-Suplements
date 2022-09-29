import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../context/CartContext";
function ItemDetail({solo}) {
    const {itemId} = useParams();

    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data,quantity);
    }
    
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {solo.thumbnail} />
        <Card.Body>
        <Card.Title>{solo.title}</Card.Title>
        <Card.Text>
            {solo.domain_id};
            

        </Card.Text>
        {
            goToCart
            ? <Link to = '/cart'>Finalizar compra</Link>
            : <ItemCount initial={0} stock={10} onAdd = {onAdd}/>
        }
        <Button variant="primary"><NavLink to='/item/{solo.id}'>detalle</NavLink></Button>
        </Card.Body>
    </Card>
    );
}
export default ItemDetail;