import { Fragment, useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Person from './components/Person';
import ShowProduct from './components/ShowProduct';
import Error from './components/Error';

function App() {

    return (
        <Fragment>
            <nav>
                <ul>
                    <li><NavLink to="/cat">Cat</NavLink></li>
                    <li><NavLink to="/dog">Dog</NavLink></li>
                    <li><NavLink to="/person">Person</NavLink></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/dog' element={ <Dog/>} />
                <Route path='/cat' element={ <Cat/>} />
                <Route path='/person' element={<Person />} />
                <Route path='/error' element={ <Error/>} />
                <Route path='/products/:productId' element={<ShowProduct/> } />
            </Routes>
        </Fragment>
    )
}

export default App
