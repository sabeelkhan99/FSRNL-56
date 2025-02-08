const express = require('express');

const app = express();

// // console.log(app);
// app.use((req, res) => {
//     console.log('INSIDE MY APP.USE');
//     // console.log(req);
//     res.send('<h1>Hello from server</h1>')
// });
// app.get('/cat', (req, res) => {
//     res.send('Meeooowwww');
// })

// app.post('/cat', (req, res) => {
//     res.send('POST Method: Meeeooowwwww');
// })


app.get('/npm', (req, res) => {
    const { activeTab='readme' } = req.query;
    res.send(`You are on ${activeTab} tab!!!!`);
});

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are requesting a ${subredit} subredit!!!`);
});

app.get('/r/:subredit/:name', (req, res) => {
    console.log(req.params);
    res.send(`You are requesting a  subredit with two path params`);
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});

