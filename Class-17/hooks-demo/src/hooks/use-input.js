import  { useState } from 'react'

const useInput = () => {

    const [value, setValue] = useState(null);

    const takeInput = (event) => {
        setValue(() => event.target.value);
    }

    return [value, takeInput];
}

export default useInput;
