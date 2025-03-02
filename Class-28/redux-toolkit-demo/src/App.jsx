import './App.css';
import Todos from './components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addbyAmount } from './features/counterSlice';

function App() {

    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();


    return (
        <>
            <h1>Hello from react app : { counter}</h1>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(addbyAmount(10))}>+10</button>
            <Todos />
        </>
    )
}

export default App
