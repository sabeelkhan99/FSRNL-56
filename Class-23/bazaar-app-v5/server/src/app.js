import express from 'express';
import productRoutes from './routes/product.js';

const app = express();

app.use(express.json());

app.use(productRoutes);

// Global Express Error Handler
app.use((err, req, res, next) => {
    const { message = 'Internal Error', status = 500 } = err;
    res.status(status).json(message);
});

export default app;
