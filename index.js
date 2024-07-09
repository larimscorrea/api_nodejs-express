const express = require('express')
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

userRoute(app)

app.get('/', (req, res) => res.send('Hello world to Express'))

app.listen(port, () => console.log('API rodando na port 3000'))