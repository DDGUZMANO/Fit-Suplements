import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item({producto}) {
    
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {producto.thumbnail} />
        <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
            {producto.domain_id}
        </Card.Text>
        <Button variant="primary">{producto.price}</Button>
        </Card.Body>
    </Card>
    );
}

export default Item;