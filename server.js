const express = require('express');
const axios = require('axios');

const app = express();


app.get('/', async (req, res) => {

    const ipAddress = req.ip.split(':').pop();

    const { ip } = ipAddress;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=775c5318c1fd479697017eb228ff9ef7&ip=${ip}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        res.json(data);
    } catch (error) {
        // res.status(500).send(error);
        res.send(ipAddress)
        console.error("error");
    }
});

const port = 3000
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

