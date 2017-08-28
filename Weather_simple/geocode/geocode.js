const request = require('request');

function geocodeAddress(loc, callback) {
    var location = encodeURIComponent(loc);
    
    request ({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            callback("Connection error, unable to connect to Google services");
        } else if (body.status === "ZERO_RESULTS") {
            callback("Problem finding entered address");
        } else if (body.status === "OK") {
            callback (undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            })
        }
    });
}

module.exports = {
    geocodeAddress
}