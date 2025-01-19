import React from 'react';
import Product from '../Product/Product';
import Grid from '@mui/material/Grid2';

const ProductList = ({ products }) => {
    return (
        <Grid container spacing={2}>
            {
                products.map((product) => {
                    return <Grid key={product.id} lg={4} md={6} sm={12}>
                        <Product
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                        />
                    </Grid>

                })
            }
        </Grid>
    )
}

export default ProductList
