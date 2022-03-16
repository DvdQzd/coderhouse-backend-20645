const express = require('express')

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const { min, max, nivel, titulo } = req.query;
    res.render('datos', { min, max, nivel, titulo });
})

app.listen(8080, () => console.log('ready'))