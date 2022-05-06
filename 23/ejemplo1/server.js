const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('asdasdasfrf345f43'));

app.get('/set', (req, res) => {
    res.cookie('server', 'express').send('Cookie set');
});

app.get('/setEx', (req, res) => {
    res.cookie('server2', 'express2', { maxAge: 60000 }).send('Cookie set EX');
});

app.get('/getCookies', (req, res) => {
    res.send(req.cookies);
});

app.get('/setSigned', (req, res) => {
    res.cookie('server3', 'express3', { signed: true }).send('Signed Cookie set');
});

app.get('/getSignedCookies', (req, res) => {
    res.send(req.signedCookies);
})

app.get('/deleteCookies', (req, res) => {
    res.clearCookie().send('Cookie deleted');
})

app.listen(3000, () => console.log('Server running on port 3000'));