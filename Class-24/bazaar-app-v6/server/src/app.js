import express from 'express';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import cors from 'cors';

const app = express();


// Middlewares
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json());


// Routes
app.use(productRoutes);
app.use(userRoutes);

// Global Express Error Handler
app.use((err, req, res, next) => {
    const { message = 'Internal Error', status = 500 } = err;
    res.status(status).json({ errMsg: message });
});

export default app;
