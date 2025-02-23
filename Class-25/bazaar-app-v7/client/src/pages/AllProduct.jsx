import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios';
import { Link } from 'react-router';
import { Button } from '@mui/material';

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function fetchProducts() {
            try {
                const res = await axios.get('http://localhost:1234/products');
                setProducts(() => res.data);
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <div>
             <Button component={Link} sx={{marginTop:'100px'}} to="/login">With inlining</Button>
             <ProductList products={ products } />
        </div>
    )
}

export default AllProduct
