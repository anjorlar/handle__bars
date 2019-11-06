const request = require('request');

let geoCodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    let apiKey = 'AIzaSyB9ZBHAJOfbuue3U1lfbYynJa46bsidqbA'
    let accessKey = process.env.APIKEY

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${accessKey}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google servers')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find address')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    });
};

module.exports.geoCodeAddress = geoCodeAddress;