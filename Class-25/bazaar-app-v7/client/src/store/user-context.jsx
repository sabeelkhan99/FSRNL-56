import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout : ()=>{}
});

export const UserContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userCredentials) => {
        axios.post('http://localhost:1234/login', userCredentials)
            .then((res) => {
                setIsLoggedIn(true);
                window.localStorage.setItem('token', res.data?.token);
                toast.success(res.data?.message);
            })
            .catch((err) => {
                toast.error(err.response?.data?.errMsg);
            });
    }

    const logout = () => {
        window.localStorage.setItem('token', '');
        setIsLoggedIn(false);
    }

    useEffect(() => {
        axios.get('http://localhost:1234/profile', {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`
                }
            })
            .then((res) => {
                setIsLoggedIn(true);
            })
            .catch((err) => {
                setIsLoggedIn(false);
                console.log(err);
            })
    }, []);

    const context = {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;
