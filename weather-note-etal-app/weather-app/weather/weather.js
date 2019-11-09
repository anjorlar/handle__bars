const request = require('request');

let getWeather = (lat, lng, callBack) => {
    let accessKey = process.env.WEATHER_API_KEY;
    let url = process.env.DARKSKY_WEATHER_URL
    request({
        url: `${url}/${accessKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callBack(undefined, {
                dailyReports: body.daily.summary,
                temperature: body.currently.temperature,
                latitude: body.latitude,
                longitude: body.longitude
            })
            // console.log(body.currently.temperature)
        } else {
            callBack("unable to fetch weather")
            // console.log("unable to fetch weather")
        }
    })
}

module.exports.getWeather = getWeather;
