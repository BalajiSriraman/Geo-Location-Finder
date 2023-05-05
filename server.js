const express = require('express');
const axios = require('axios');

const app = express();


const requestIp = require('request-ip');

app.use(requestIp.mw());

app.get('/', function (req, res) {
    const ipAddress = req.clientIp;
    // do something with the ipAddress
    res.send('Your IP address is ' + ipAddress);
});

app.get('/', async (req, res) => {

    const ipAddress = req.clientIp;
    // do something with the ipAddress
    const { ip } = ipAddress;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=775c5318c1fd479697017eb228ff9ef7&ip=${ip}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        res.json(data);
    } catch (error) {
        res.send(ipAddress)
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
