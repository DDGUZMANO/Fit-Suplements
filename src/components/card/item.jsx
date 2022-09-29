import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({producto}) {
    
    
    return (
        
        <Link to = {`/item/${producto.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {producto.thumbnail} />
                <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    {producto.domain_id}
                    {producto.category_id}
                </Card.Text>
                <Button variant="primary">{producto.price}</Button>
            </Card.Body>
            </Card>
        </Link>
        
    );
}

export default Item;