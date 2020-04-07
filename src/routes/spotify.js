const express = require('express')

const spotifyController = require('../controllers/spotify')

const router = express()

router.get('/spotify/artists', spotifyController.getArtists)
router.get('/spotify/tracks', spotifyController.getTracks)

module.exports = router