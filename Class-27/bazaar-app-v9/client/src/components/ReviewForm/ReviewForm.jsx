import { Box, Button } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReviewForm = (props) => {
    const [rating, setRating] = useState(2);
    const [review, setReview] = useState('');

    const handleCreateReview = () => {
        axios.post(`http://localhost:1234/products/${props.productId}/reviews`, { rating, review })
            .then((res) => {
                console.log(res);
                toast.success('review created successfully', { position: 'top-right' });
                props.fetchReview();
            })
            .catch((err) => console.log(err));
      
    }

    return (
        <Fragment>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newRating) => {
                    setRating(newRating);
                }} />
            <br />
            <Box component="textarea" onChange={(event) => setReview(event.target.value)}></Box>
            <Button onClick={handleCreateReview}>Submit</Button>
        </Fragment>
    )
}

export default ReviewForm
