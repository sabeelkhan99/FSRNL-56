const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());

let products = [
    {   
        id: 1,
        title: "Iphone",
        price: 200,
        description: "The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww"
    },
    {
        id: 2,
        title: "Macbook",
        price: 100,
        description: "The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww"
    },
    {
        id: 3,
        title: "Apple Watch",
        price: 400,
        description: "The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww"
    }
]


// Get All products
// Todo: Implement paging and sort
// Paging : pageNo and pageSize 
app.get('/products', (req, res) => {
    res.status(200).json(products);
});


// Create new Product
app.post('/products', (req, res) => {
    const { title, description, image, price } = req.body;
    products.push({ id: products.length + 1, title, description, image, price });
    res.status(201).json({ message: 'Product created successfully' });
});

// Show a product
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === parseInt(productId));
    if (!product) {
        throw Error('Product with Id not found')
    }
    res.status(200).json(product);
});

// Update a product
app.patch('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const { title, description, image, price } = req.body;
    const product = products.find((product) => product.id === parseInt(productId));
    if (!product) {
        throw Error('Product with Id not found')
    }
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;

    res.status(200).json({ message: 'product updated successfully' });
});

// Delete a product
app.delete('/products/:productId', (req, res) => {
    const { productId } = req.params;
    products = products.filter((product) => product.id !== parseInt(productId));
    res.status(200).json({ message: 'product deleted successfullly' });
});

app.listen(1234, () => console.log('Server started at port 1234'));