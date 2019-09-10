const express = require('express')
const mongoose = require('./config/database')
const { router } = require('./config/routes')
const app = express()
const port = 5000
// app.use(router);
app.use(express.json())
app.use('/', router)

app.listen(port, () => console.log(`Application listening on port ${port}!`))