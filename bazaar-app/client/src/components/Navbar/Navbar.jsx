import React, { useState, useContext, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartContext from '../../store/cart-context';
import UserContext from '../../store/user-context';

const drawerWidth = 240;

const Navbar = (props) => {

    const cartContext = useContext(CartContext);
    const { isLoggedIn, logout, user } = useContext(UserContext);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        logout();
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography component={Link} to="/" variant="h6" sx={{ my: 2 }}>
                Bazaar
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText component={Link} to="/" primary="products" />
                    </ListItemButton>
                </ListItem>
                {!isLoggedIn && <Fragment>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText component={Link} to="/login" primary="login" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/signup" sx={{ textAlign: 'center' }}>
                            <ListItemText primary="signup" />
                        </ListItemButton>
                    </ListItem>
                </Fragment>
                }
                {isLoggedIn &&
                    <Fragment>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/cart" sx={{ textAlign: 'center' }}>
                                <Badge badgeContent={cartContext.cartLength == 0 ? '0' : cartContext.cartLength} color="primary">
                                    <LocalMallIcon color="action" />
                                </Badge>
                            </ListItemButton>
                        </ListItem>
                    </Fragment>
                }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" color={`${ user && user.role ==='SELLER' ? 'secondary': 'primary'}`}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                       <Button component={Link} sx={{color: '#fff', fontSize:'1.2rem'}} to="/">Bazaar</Button>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {isLoggedIn && user && <Button component={Link} to="/profile" sx={{ color: '#fff' }}>
                            {user.username}
                        </Button>
                        }

                        {isLoggedIn && user && user.role==='SELLER' && <Button component={Link} to="/new" sx={{ color: '#fff' }}>
                            Add Product
                        </Button>
                        }
                        <Button component={Link} to="/" sx={{ color: '#fff' }}>
                            Products
                        </Button>
                        {!isLoggedIn && <Fragment>
                            <Button component={Link} to="/login" sx={{ color: '#fff' }}>
                                Login
                            </Button>
                            <Button component={Link} to="/signup" sx={{ color: '#fff' }}>
                                SignUp
                            </Button>
                        </Fragment>
                        }
                        {isLoggedIn &&
                            <Fragment>
                            <Button onClick={handleLogout} sx={{ color: '#fff' }}>
                                Logout
                            </Button>
                        <Button component={Link} to="/cart">
                            <Badge badgeContent={cartContext.cartLength == 0 ? '0' : cartContext.cartLength} color="primary">
                                <LocalMallIcon color="action" />
                            </Badge>
                                </Button>
                            </Fragment>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Navbar;
