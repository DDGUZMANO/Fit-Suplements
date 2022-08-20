import logo from './logo.svg';
import './App.css';
import CollapsibleExample from './components/Navbar'

const App = () => {

  const person = { name:'Douglas', lastname:'Guzmán'}

  return (
    <div className="App">
      <CollapsibleExample/>
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
