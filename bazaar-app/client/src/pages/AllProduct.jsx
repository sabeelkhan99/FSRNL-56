import React, { Fragment, useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios';
import { Box } from '@mui/material';
import Banner from '../components/Banner/Banner';

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function fetchProducts() {
            try {
                const res = await axios.get('https://bazaar-app-server-56.onrender.com/products');
                setProducts(() => res.data);
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <Fragment>
            <Banner />
            <Box sx={{ mt: 5, maxWidth: '80%', mx: 'auto' }}>
                <ProductList products={products} />
            </Box>
        </Fragment>
    )
}

export default AllProduct
