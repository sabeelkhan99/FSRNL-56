import React, { useState } from 'react';

const useToggle = (initialVal= false) => {
    
    const [value, setValue] = useState(initialVal);
  
    const toggleValue = () => {
        setValue(() => !value);
    }
  
  
    return [value, toggleValue];
}

export default useToggle;
