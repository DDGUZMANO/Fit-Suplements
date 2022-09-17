import logo from './logo.svg';
import './App.css';
// import CollapsibleExample from './components/Navbar'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Estadisticas from './components/Navbar/estadisticas';
import Ingresar from './components/Navbar/ingresar';
import Registro from './components/Navbar/registrarse';
import Investigacion from './components/Navbar/investigacion';



const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/investigacion' element={<Investigacion/>}/>
          <Route path='/estadisticas' element={<Estadisticas/>}/>
          <Route path='/ingresar' element={<Ingresar/>}/>
          <Route path='/registro' element={<Registro/>}/>
        </Routes>
    </div>
  );
};


export default App;
