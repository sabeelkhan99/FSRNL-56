import './App.css'
import TodoApp from './components/TodoApp/TodoApp';
import useToggle from './hooks/use-toggle';

function App() {

    const [isDark, toggleIsDark] = useToggle(false);

    return (
        <div className={`${isDark? 'dark-mode': 'light-mode'}`}>
            <button onClick={()=> toggleIsDark()}>ChangeMode</button>
            <TodoApp />
        </div>
    )
}

export default App
