import logo from './logo.svg';
import './App.css';
// import CollapsibleExample from './components/Navbar'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';

const App = ({textoDeBusqueda}) => {
  const person = { name:'Douglas', lastname:'Guzmán'}
  const [carrito, setCarrito] = useState([])


  const onAdd = (cantidad) =>{
    console.log(`Añadiste ${cantidad} de unidades al carrito`)
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      {/* <ItemCount initial = {5} stock = {10} onAdd = {onAdd}/> */}
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          douglas
        </p>
        <ButtonComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

const ButtonComponent = () =>{

  return <button>Ir A APP</button>
}

export default App;
