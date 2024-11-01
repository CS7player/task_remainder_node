const express = require('express')
const cors = require('cors')
const routes = require('./app/routes')
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)
require('./app/utils/constants')
require('./app/utils/mongodb')
app.listen(SERVER_PORT,()=>{
    console.log('the server is running on '+ SERVER_PORT)
})