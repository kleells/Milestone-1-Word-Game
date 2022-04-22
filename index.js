const PORT = 4000 
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

// express rooting
app.get('/word', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            // hides my API key
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }


    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data[2])
    }).catch(function (error) {
    console.error(error)
    })
})

// DICTIONARY API


app.listen(PORT, () => console.log('Server running on port ' + PORT))