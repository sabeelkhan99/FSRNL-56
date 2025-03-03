import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { CartContextProvider } from './store/cart-context.jsx';
import { UserContextProvider } from './store/user-context.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </UserContextProvider>
    </BrowserRouter>
)
