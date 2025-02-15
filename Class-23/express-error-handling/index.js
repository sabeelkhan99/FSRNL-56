const express = require('express');
const app = express();
const fs = require('node:fs/promises');
const path = require('node:path');
const { BadRequestError, InternalServerError } = require('./core/errors');
const catchAsync = require('./core/catchAsync');

// Error handling in case of synchronous code
app.get('/hello', (req, res) => {
    if (true) {
        throw new InternalServerError('We are delibertly throwing this error');
    }
    res.send(`Error Response message: ${err.message}`);
});

app.get('/fetch', catchAsync(async (req, res, next) => { 
    const filePath = path.join(__dirname, 'package.jsn');
    const data = await fs.readFile(filePath, { encoding: 'utf-8' });
    res.send(data);
}))

// Global : default express error handler
app.use((err, req, res, next) => {
    const { message='Internal Server Error', status=500 } = err;
    res.status(status).send(message);
})

app.listen(1234, () => console.log('server started at port 1234'));