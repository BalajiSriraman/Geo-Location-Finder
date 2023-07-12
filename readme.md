# IP Geolocation API

This Node.js application utilizes the IP Geolocation API to fetch geolocation information based on the IP address of the incoming request. The application is built using Express.js and Axios.

## Functionality

When the application receives a GET request on the root endpoint ("/"), it extracts the IP address from the request and sends a request to the IP Geolocation API to fetch geolocation data for that IP address. The fetched data is then returned as a JSON response to the client.

In case there is an error during the API request, the application handles it by sending the API request URL and the encountered error as a response.

## Setup

1. Install the dependencies by running the following command:
npm install


2. Start the application by running the following command:
node server.js

3. The application will start listening on port 3000. You can access it by navigating to `http://localhost:3000` in your browser.

## Configuration

The application uses the IP Geolocation API to fetch geolocation data. Make sure to provide a valid API key by replacing the placeholder in the API URL (`https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=${ipAddress}`). You can obtain an API key by signing up on the [IP Geolocation API website](https://ipgeolocation.io).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

