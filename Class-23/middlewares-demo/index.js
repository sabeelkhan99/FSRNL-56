const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     res.send('Hijack by my app.use()');
// })
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Assuming valid token value is: abc
const verifyToken = (req, res, next) => {
    const { token } = req.query;
    if (!token) {
        return res.send('No token present');
    }

    if (token !== 'abc') {
        return res.send('Invalid token');
    }

    next();
}


// app.use((req, res, next) => {
//     console.log('Inside my first middleware');
//     req.requestTime = Date.now();
//     req.username = 'Max'
//     next();
//     console.log('Inside my first middleware after calling next()');
// });

// app.use((req, res, next) => {
//     console.log('Inside my second middleware');
//     next();
//     console.log('Inside my second middleware after calling next()');
// });

app.get('/', (req, res, next) => {
    const epoch = req.requestTime;
    const username = req.username;
    const date = new Date(epoch);
    res.send(`<h1> ${username} Hello from server : ${date.toLocaleString()}</h1>`)
});

app.get('/secret',verifyToken, (req, res) => {
    res.send('Sometime i use headphones in public so that i that i dont have to talk to anyone');
})

app.listen(1234, () => console.log('server started at port 1234'));