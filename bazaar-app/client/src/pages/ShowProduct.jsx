import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Product from '../components/Product/Product';
import { useParams } from 'react-router';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import Review from '../components/Review/Review';

const ShowProduct = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    const fetchReview = () => {
        axios.get(`https://bazaar-app-server-56.onrender.com/products/${id}/reviews`)
            .then((res) => {
                setReviews(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get(`https://bazaar-app-server-56.onrender.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        
        fetchReview();
    }, []);

   


    if (!product) {
        return <p>Loading.......</p>
    }

    return (
        <Box sx={{ mt: 15, maxWidth: '80%', mx: 'auto' }}>
            <Grid container spacing={10}>
                <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
                    <Product
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">Add a review</Typography>
                    <ReviewForm productId={id} fetchReview={fetchReview} />
                    {
                        reviews.map((item) => {
                            return <Review key={item._id} rating={item.rating} review={item.review}/>
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default ShowProduct