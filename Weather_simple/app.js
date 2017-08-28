
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const getweather = require("./getweather/getweather.js");

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address location to fetch weather information',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMSG, result) => {
    if (errorMSG) {
        console.log(errorMSG);
    } else {
        getweather.getWeather(result.latitude, result.longtitude, (errorMessage, temprature) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Currently it is ${temprature.actual}, feels like ${temprature.feelsLike} in\n ${result.address}`);
            }
        });
    }
});

