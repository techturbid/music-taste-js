require('dotenv').config()

const express = require('express')

const spotifyRoutes = require('./routes/spotify')

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 8080

app.use('/spotify', spotifyRoutes)

app.use((req, res, next) => {
    res.status(400).json('Not found');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})