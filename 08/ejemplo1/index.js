const express = require('express')
const { Router } = express

const app = express()
const router = Router()

router.get('/recurso', (req, res) => {
   res.send('get ok')
})

router.post('/recurso', (req, res) => {
   res.send('post ok')
})

app.use('/api', router)


app.route('/auth')
    .get((req, res) => {
        res.send('get ok')
    })
    .post((req, res) => {
        res.send('post ok')
    })
    .put((req, res) => {
        res.send('put ok')
    })

app.listen(8080)