import {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartContext from '../../store/cart-context';

const Product = ({ title, price, description, image }) => {
    const cartContext = useContext(CartContext);

    const addToCartHandler = () => {
        cartContext.addToCart({ title, price, image, qty: 1 });
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 180 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title.substring(0,20)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description.substring(0,90)}
                </Typography>
                <Typography variant="h5" component="div">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Show</Button>
            </CardActions>
            <CardActions>
                <Button onClick={addToCartHandler} size="small">Add To Cart</Button>
            </CardActions>
        </Card>
    );
}

export default Product;
