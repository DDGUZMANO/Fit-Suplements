import logo from './logo.svg';
import './App.css';
// import CollapsibleExample from './components/Navbar'
import NavBar from './components/Navbar';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  const person = { name:'Douglas', lastname:'Guzmán'}

  return (
    <div className="App">
      <NavBar/>
      <CartWidget/>
      <ItemListContainer greeting = 'Acá proximamente encontraran todos nuestros productos!' color = "#08CDB7"/>
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
