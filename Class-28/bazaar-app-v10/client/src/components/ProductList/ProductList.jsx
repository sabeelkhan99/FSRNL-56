import React,{useContext} from 'react';
import Product from '../Product/Product';
import Grid from '@mui/material/Grid2';
import CartContext from '../../store/cart-context';

const ProductList = ({ products }) => {

    return (
        <Grid container spacing={2}>
            {
                products.map((product) => {
                    return <Grid key={product._id} lg={4} md={6} sm={12}>
                        <Product
                            id={product._id}
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
