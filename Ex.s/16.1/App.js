import './App.css';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './components/homepage';
import Products from './components/products';
import Header from './components/header';
import ProductDetails from './components/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id" exact component={ProductDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
