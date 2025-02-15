import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { CartContextProvider } from './store/cart-context.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </BrowserRouter>
)
