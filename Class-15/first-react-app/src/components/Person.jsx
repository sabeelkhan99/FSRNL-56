import { useState } from "react";

const Person = (props) => {

    const [name, setName] = useState(props.name);
    
    const profileClickHandler = () => {
        setName('Anonymous');
    }
    
    return <figure onClick={profileClickHandler} style={{ width: '300px', border: '2px solid gray', padding: '1rem' }}>
        <img style={{width:'inherit'}} src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" />
        <figcaption>
            <h3>Name: { name }</h3>
            <h3>Age: { props.age }</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h4>Followers: 100</h4>
            <h4>Following: 100</h4>
        </figcaption>
    </figure>
}

export default Person;