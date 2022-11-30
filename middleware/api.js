const axios = require('axios')


async function fetchCharactersData() {
    //let country = req.query.countryName
    const response = await axios.get(`https://hp-api.onrender.com/api/characters`)
    .then((json) => {
        // console.log(json)
        // console.log(json.data)
        return (json.data)
    })
   
    return response
}


module.exports = { fetchCharactersData}

// {headers: {"Accept-Encoding": "*"}}