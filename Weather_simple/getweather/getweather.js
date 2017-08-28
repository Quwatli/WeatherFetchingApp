const request = require('request');

const apiKey = "09c5b87eb409628e8cd5cd359bd0e16d";

function getWeather (lat, long, callback) {
    request ( {
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined,  {
                actual: body.currently.temperature,
                feelsLike: body.currently.apparentTemperature
            });
        } else {
            callback("Problem fethcing the weather information");
        }
    });
    
}

module.exports = {
    getWeather
}









