import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Pedidos solo vía Web'} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Pedidos solo vía Web'}/>} />
          <Route path="/item/:ItemId" element={<ItemDetailContainer greeting={'Pedidos solo vía Web'}/>} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
