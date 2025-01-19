import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios';

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function fetchProducts() {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(() => res.data);
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <div>
            <ProductList products={ products } />
        </div>
    )
}

export default AllProduct
