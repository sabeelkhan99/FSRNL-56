import { Box, Button, TextField } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReviewForm = (props) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
          alert("Please provide a rating");
          return;
        }
        
        axios.post(`http://localhost:1234/products/${props.productId}/reviews`, { rating, review })
        .then((res) => {
            console.log(res);
            toast.success('review created successfully', { position: 'top-right' });
            props.fetchReview();
        })
            .catch((err) => console.log(err));
        
        setRating(0);
        setReview("");
      };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mt:'1rem'}}>
            <Rating
                name="user-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
            />
            <TextField
                label="Your Review"
                multiline
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    )
}

export default ReviewForm
