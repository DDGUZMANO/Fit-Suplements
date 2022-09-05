import Item from "../card/item";

const ItemList = ({ productos }) => {

  return productos.map((producto) => <Item producto={producto} />);

};

export default ItemList;