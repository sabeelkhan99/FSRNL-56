import express from 'express';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import reviewRoutes from './routes/review.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(productRoutes);
app.use(userRoutes);
app.use(reviewRoutes);

// Global Express Error Handler
app.use((err, req, res, next) => {
    const { message = 'Internal Error', status = 500 } = err;
    res.status(status).json({ errMsg: message });
});

export default app;
