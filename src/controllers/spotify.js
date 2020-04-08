const spotifyClient = require('../clients/spotify')

const getArtists = async (req, res, next) => {
    try {
        const auth = req.header('Authorization')
        const artists = await spotifyClient.getArtists(auth);
        res.json(artists);
    } catch (err) {
        console.log(err)
    }
}

const getTracks = async (req, res, next) => {
    try {
        const auth = req.header('Authorization')
        const tracks = await spotifyClient.getTracks(auth);
        res.json(tracks);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getArtists,
    getTracks
}