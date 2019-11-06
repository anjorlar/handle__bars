const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address  to fetch weather from',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB9ZBHAJOfbuue3U1lfbYynJa46bsidqbA`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(response.body.results[0].geometry.location, undefined, 2));
    console.log(`Address: ${body.results[0].geometry.location.formatted_address}`)
    console.log(JSON.stringify(response.body.results[0].geometry.viewport.northeast.lat, undefined, 2));
    console.log(JSON.stringify(response.body.results[0].geometry.location_type, undefined, 2));
});