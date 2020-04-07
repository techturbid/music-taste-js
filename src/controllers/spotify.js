const spotifyClient = require('../clients/spotify')

const getArtists = async (req, res, next) => {
    const artists = await spotifyClient.getArtists();
    res.json(artists);
}

const getTracks = async (req, res, next) => {
    const tracks = await spotifyClient.getTracks();
    res.json(tracks);
}

module.exports = {
    getArtists,
    getTracks
}