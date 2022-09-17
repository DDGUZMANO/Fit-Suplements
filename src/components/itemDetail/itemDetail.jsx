import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useParams } from "react-router-dom";

function ItemDetail({solo}) {
    const {itemId} = useParams();
    
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {solo.thumbnail} />
        <Card.Body>
        <Card.Title>{solo.title}</Card.Title>
        <Card.Text>
            {solo.domain_id}
        </Card.Text>
        <Button variant="primary"><NavLink to='/item/{solo.id}'>detalle</NavLink></Button>
        </Card.Body>
    </Card>
    );
}
export default ItemDetail;