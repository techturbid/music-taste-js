const express = require('express')

const spotifyController = require('../controllers/spotify')

const router = express()

router.get('/artists', spotifyController.getArtists)
router.get('/tracks', spotifyController.getTracks)

module.exports = router