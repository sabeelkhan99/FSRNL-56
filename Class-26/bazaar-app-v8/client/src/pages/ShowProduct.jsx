import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Product from '../components/Product/Product';
import { useParams } from 'react-router';
import axios from 'axios';

const ShowProduct = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1234/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    if (!product) {
        return <p>Loading.......</p>
    }

    return (
        <Box sx={{mt:15, maxWidth:'80%', mx:'auto'}}>
            <Grid container spacing={10}>
                    <Grid item size={{ xs: 12, md: 6, lg: 6}}>
                        <Product
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image} 
                        /> 
                    </Grid>
                <Grid item size={{ xs: 12, md: 6, lg: 6}}>
                            <Typography variant="h4">Add a review</Typography>
                    </Grid>
            </Grid>
        </Box>
    )
}

export default ShowProduct