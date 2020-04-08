const config = require('../config/')

const axios = require('axios').create({
  baseURL: config.clients.spotify.url
})

const getArtists = async (auth) => {
    try {
      const response = await axios.get(`/me/top/artists`, {
        headers: {
          "Authorization": `${auth}`
        }
      });

      if (response.status !== 200) {
        return {}
      }

      return response.data
    } catch (err) {
      console.log(err)
    }
}

const getTracks = async (auth) => {
  try{
    const response = await axios.get(`/me/top/tracks`, {
      headers: {
        "Authorization": `${auth}`
      }
    });

    if (response.status !== 200) {
      return {}
    }

    return response.data
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
    getArtists,
    getTracks
}