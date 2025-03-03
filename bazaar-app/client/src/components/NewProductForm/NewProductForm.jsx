import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const NewProductForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const newProduct = {
            title: data.get('title'),
            price: data.get('price'),
            description: data.get('description'),
            image: data.get('image')
        }

        axios.post('https://bazaar-app-server-56.onrender.com/products', newProduct, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`
                }
            })
            .then((res) => {
                console.log(res.data);
                toast.success('Product Added successfully', { position: 'top-right' });
                // navigate
            })
            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AddCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add New Product
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="title"
                        autoComplete="title"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="price"
                        label="price"
                        name="price"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="description"
                        name="description"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="image"
                        label="image url"
                        name="image"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default NewProductForm;