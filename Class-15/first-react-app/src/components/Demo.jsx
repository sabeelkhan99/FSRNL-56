import React from 'react'

const Demo = () => {
    
    const randomNum = Math.floor(Math.random() * 10 + 1);

    const isLoggedIn = true;

    console.log(randomNum);

    // let element = null;
    // if (randomNum < 5) {
    //     element = <p>Number is less than { randomNum }</p>
    // } else {
    //     element = <div style={{ fontWeight: 'bold' }}> The number is more than/equal { randomNum }</div>
    // }

    const todos = ["Go to Swimming", "Learn TS", "Learn Java"];
    
    return (
        <div>
            {/* {element} */}

            {randomNum < 5 ? <p>Number is less than {randomNum}</p> : <div style={{ fontWeight: 'bold' }}> The number is more than/equal {randomNum}</div>}
            
            {randomNum ===7 && <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952bbwfgc0tc325c3868cm179p4o8wnh5t31vhjgavp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"/>}
        
            {isLoggedIn && <button>Logout</button>}
            {!isLoggedIn && <button>Log In</button>}
           
            <ul>
                {
                    todos.map((todo, idx) => {
                        return <li key={ idx }>{ todo }</li>
                    })
                }
            </ul>
        </div>
  )
}

export default Demo;
