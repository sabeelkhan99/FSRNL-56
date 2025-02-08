const express = require('express');
const app = express();

// Below middlewares are used to parse the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/users', (req, res) => {
    const { username, age } = req.query;
    res.send(`You sent username and age as : ${username}, ${age}`);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send("You made a post request")
});


app.listen(1234, () => console.log('Server started at port 1234'));