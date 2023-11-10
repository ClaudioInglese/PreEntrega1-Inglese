import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Pedidos solo vía Web'}/>
    </div>
  );
}

export default App;
