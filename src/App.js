import './App.css';
import Navbar from './components/navbar/Navbar';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart'
import Loginsignin from './pages/Loginsignin'
import Footer from './components/newslatter/foter/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import Shopcat from './pages/Shopcat';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men'element={<Shopcat banner={men_banner} category="men"/>}/>
      <Route path='/women'element={<Shopcat banner={women_banner} category="women"/>}/>
      <Route path='/kids'element={<Shopcat banner={kids_banner} category="kid"/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Loginsignin/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
