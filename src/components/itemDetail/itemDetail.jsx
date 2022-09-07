import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail({solo}) {
    
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {solo.thumbnail} />
        <Card.Body>
        <Card.Title>{solo.title}</Card.Title>
        <Card.Text>
            {solo.domain_id}
        </Card.Text>
        <Button variant="primary">{solo.price}</Button>
        </Card.Body>
    </Card>
    );
}
export default ItemDetail;