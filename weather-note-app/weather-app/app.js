require('dotenv').config({ path: 'dev.env' });
const geoCode = require('./geocode/geocode');
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
geoCode.geoCodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(result, undefined, 2))
    }
});