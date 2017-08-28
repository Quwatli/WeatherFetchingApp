
const yargs = require('yargs');
const axios = require('axios');


const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address location to fetch weather information',
        string: true
    }
}).help().alias('help', 'h').argv;

var location = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}`;

axios.get(geocodeURL).then((response) => {

    if (response.data.status === "ZERO_RESULTS") {
        throw new Error("Unable to find that address!");
    } else {
        var apiKey = "09c5b87eb409628e8cd5cd359bd0e16d";
        var latitude = response.data.results[0].geometry.location.lat;
        var longtitude = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longtitude}`;
    
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    }
    
}).then((response) => {

    var temp = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    
    console.log(`it's currently ${temp} and feels like ${appTemp}`);

}).catch((e) => {
    if (e.code === "ENOTFOUND") {
        console.log("Unable to connect to API servers");
    } else {
        console.log(e.message);
    }
});


