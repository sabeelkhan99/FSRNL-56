import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const ShowProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;

    useEffect(() => {
        if (isNaN(productId-1)) {
            navigate('/error');
        }
    });

    return (
      <div>
            <h1>Displaying product with id { params.productId }</h1>
      </div>
    )
}

export default ShowProduct
