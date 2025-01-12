import './App.css';
import Demo from './components/Demo';
import Person from './components/Person';

function App() {

    const persons = [
        {
            name: 'Max',
            age: 21
        },
        {
            name: 'John',
            age: 22
        },
        {
            name: 'Anad',
            age: 23
        },
    ]

    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Demo/>
        {
            persons.map((person, idx) => {
                return <Person key={idx} name={person.name} age={ person.age } />
           }) 
        }
  </div>
}

export default App;
