require('dotenv').config({ path: 'dev.env' });
const yargs = require('yargs');
const axios = require('axios');
const weather = require('./weather/weather');

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
let accessKey = process.env.APIKEY;
let url = process.env.GEOCODE_URL;
let geoCodeUrl = `${url}${encodedAddress}&key=${accessKey}`;
axios.get(geoCodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find that address');
    }
    let lat = response.data.results[0].geometry.location.lat,
        lng = response.data.results[0].geometry.location.lng,
        weatherUrl = `${url}/${accessKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((res) => {
    let temperature = response.data.currently.temperature,
        apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`it's currentlly${temperature}. it feels like ${apparentTemperature}`)
}).catch((e) => {
    if (e === 'ENOTFOUND') {
        console.log(`Unable to connect to API servers`)
    } else {
        console.log(e.message)
    }
});
