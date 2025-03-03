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
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const SignUp = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
      
        const newUser = {
            username: data.get('username'),
            password: data.get('password'),
            email: data.get('email'),
            role: data.get('role')
        }

        axios.post('https://bazaar-app-server-56.onrender.com/register', newUser)
            .then(() => {
                toast.success('Signed Up successfully', {
                    position: 'top-right',
                });
                navigate('/login');
            })
            .catch((err) => {
                const errMsg = err.response?.data?.errMsg;
                toast.error(errMsg, {
                    position: 'top-right',
                });
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
                    Create Account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                    />
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="role"
                    >
                        <FormControlLabel value="seller" control={<Radio />} label="Seller" />
                        <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
                    </RadioGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;