const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



/***
 * { name: 'express', value: 'express', expires: 1000 }
 * 
 */

app.post('/cookies', (req, res) => {
    const cookieName = req.body.name;
    const cookieValue = req.body.value;
    const expiration = req.body.expires;

    const faltantes = []

    if(!cookieName) faltantes.push('cookieName')
    if(!cookieValue) faltantes.push('cookieValue')

    if(faltantes.length > 0){
        res.send({error: `falta ${faltantes.join(', ')}`});
    }

    res.cookie(cookieName, cookieValue, expiration ? { maxAge: expiration } : undefined).send({ proceso: 'ok' })
});

app.get('/getCookies', (req, res) => {
    res.send(req.cookies);
});

app.delete('/deleteCookies/:name', (req, res) => {
    res.clearCookie(req.params.name).send({ proceso: 'ok' });
});

app.listen(3000, () => console.log('Server running on port 3000'));