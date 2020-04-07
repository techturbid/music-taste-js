const express = require('express')

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 8080

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})