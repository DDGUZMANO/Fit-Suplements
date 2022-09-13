import logo from './logo.svg';
import './App.css';
// import CollapsibleExample from './components/Navbar'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Estadisticas from './components/Navbar/estadisticas';
import Ingresar from './components/Navbar/ingresar';
import Registro from './components/Navbar/registrarse';
import Investigacion from './components/Navbar/investigacion';



const App = ({textoDeBusqueda}) => {
  const person = { name:'Douglas', lastname:'Guzmán'}
  const [carrito, setCarrito] = useState([])


  const onAdd = (cantidad) =>{
    console.log(`Añadiste ${cantidad} de unidades al carrito`)
  }

  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:idd' element={<ItemDetailContainer/>}/>
          <Route path='/investigacion' element={<Investigacion/>}/>
          <Route path='/estadisticas' element={<Estadisticas/>}/>
          <Route path='/ingresar' element={<Ingresar/>}/>
          <Route path='/registro' element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemDetailContainer/> */}
      {/* <ItemListContainer/> */}
      
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
