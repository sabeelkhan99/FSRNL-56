import { Typography, Rating, Box} from '@mui/material'
import React from 'react';

const Review = ({rating, review}) => {
  return (
    <Box>
          <Rating name="read-only" value={rating} readOnly />
          <Typography>{ review}</Typography>
    </Box>
  )
}

export default Review;
