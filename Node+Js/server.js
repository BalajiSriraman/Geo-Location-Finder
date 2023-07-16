const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  // const ipAddress = req.ip.split(':').pop();
  const ipAddress = "49.37.222.10";
  console.log("ipAddress", ipAddress);
  const url =
    `https://api.ipgeolocation.io/ipgeo?apiKey=775c5318c1fd479697017eb228ff9ef7&ip=${ipAddress}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.send(
      `https://api.ipgeolocation.io/ipgeo?apiKey=775c5318c1fd479697017eb228ff9ef7&ip=${ipAddress}`,
    );
    console.error("error", ipAddress);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
