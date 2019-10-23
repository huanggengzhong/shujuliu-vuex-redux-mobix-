import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      
      <hr/>
     <Products />
     <hr/>
     <Cart />
    </div>
  );
}

export default App;
