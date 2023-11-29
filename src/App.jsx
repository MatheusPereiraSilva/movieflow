import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from '../src/components/Home/Home'
import Lancamentos from '../src/components/pages/Lancamentos/Lancamentos'
import Categories from '../src/components/pages/Categories/Categories'
import Perfil from '../src/components/pages/Perfil/Perfil'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="lancamentos" element={<Lancamentos/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="perfil" element={<Perfil/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
