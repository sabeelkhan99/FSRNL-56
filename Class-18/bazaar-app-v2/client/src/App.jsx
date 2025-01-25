import './App.css';
import Layout from './components/Layout/Layout';
import AllProduct from './pages/AllProduct';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

function App() {

  return (
      <Layout>
          <Routes>
              <Route path='/' element={ <AllProduct/> } />
              <Route path='/login' element={ <Login/> } />
              <Route path='/signup' element={ <SignUp/> } />
              <Route path='/cart' element={ <Cart/> } />
          </Routes>
         
      </Layout>
  )
}

export default App
