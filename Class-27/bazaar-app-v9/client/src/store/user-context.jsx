import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router'

const UserContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    user: null
});



export const UserContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchUserProfile = () => {
        axios.get('http://localhost:1234/profile', {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            setIsLoggedIn(true);
            setUser(res.data);
            navigate('/');
        })
        .catch((err) => {
            setIsLoggedIn(false);
            console.log(err);
        })
    }

    const login = (userCredentials) => {
        axios.post('http://localhost:1234/login', userCredentials)
            .then((res) => {
                setIsLoggedIn(true);
                window.localStorage.setItem('token', res.data?.token);
                toast.success(res.data?.message);
                fetchUserProfile();
            })
            .catch((err) => {
                toast.error(err.response?.data?.errMsg);
            });
    }

    const logout = () => {
        window.localStorage.setItem('token', '');
        setIsLoggedIn(false);
        setUser(null);
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const context = {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        user
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;
