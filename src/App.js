import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting="Bienvenidos" /> }/>
        <Route path="/categorias/:categoryId" element={ <ItemListContainer greeting="Bienvenidos" /> }/>
        <Route path="/producto/:itemId" element={ <ItemDetailContainer /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
