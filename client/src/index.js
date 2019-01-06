import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import BBuyProvider from './context/BBuyProvider'
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

// ReactDOM.render(
//     <BrowserRouter>
//         <BBuyProvider>
//             <App />
//         </BBuyProvider>
//     </BrowserRouter>, 
// document.getElementById('root'));
