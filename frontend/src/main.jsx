import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-full min-h-screen">
      <CartProvider>
        <App />
      </CartProvider>
    </div>
  </React.StrictMode>
);
