import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import ProductProvider from './context/ProductProvider'
import ProductProvider from './context/ProductProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/css/index.css'


ReactDOM.render(
    <BrowserRouter>
        <ProductProvider>
            <App />
        </ProductProvider>
    </BrowserRouter>, 
document.getElementById('root'));


