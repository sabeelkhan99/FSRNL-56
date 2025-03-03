import './App.css';
import Layout from './components/Layout/Layout';
import AllProduct from './pages/AllProduct';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ShowProduct from './pages/ShowProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserContext from './store/user-context';
import { useContext } from 'react';
import NewProductForm from './components/NewProductForm/NewProductForm';

function App() {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                {/* Private routes starts here! */}
                <Route element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
                    <Route path='/products/:id' element={<ShowProduct />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/new' element={<NewProductForm />} />
                </Route>
            </Routes>

        </Layout>
    )
}

export default App
