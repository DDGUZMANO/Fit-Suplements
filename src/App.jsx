import logo from './logo.svg';
import React from 'react';
import './App.css';
// import CollapsibleExample from './components/Navbar'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Estadisticas from './components/Navbar/estadisticas';
import Ingresar from './components/Navbar/ingresar';
import Registro from './components/Navbar/registrarse';
import Investigacion from './components/Navbar/investigacion';
import Cart from './components/context/cart';
import CartProvider from './components/context/CartContext';

const App = () => {
  return (
    <div className="App">
        
        <CartProvider>
        <NavBar/>
          <div  className="routes">
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:category_id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/investigacion' element={<Investigacion/>}/>
            <Route path='/estadisticas' element={<Estadisticas/>}/>
            <Route path='/ingresar' element={<Ingresar/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </div>
        </CartProvider>
          
        
        
    </div>
  );
};


export default App;
