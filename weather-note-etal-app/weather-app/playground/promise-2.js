const request = require('request');

let asyncCode = (address) => {
    let accessKey = process.env.WEATHER_API_KEY;
    let url = process.env.DARKSKY_WEATHER_URL
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/fff3b37c5005abe76e59403b7ca29965/36.7520521,-95.94105359999999`,
            // url: `${url}/${accessKey}/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                    dailyReports: body.daily.summary,
                    temperature: body.currently.temperature,
                    latitude: body.latitude,
                    longitude: body.longitude
                })
                // console.log(body.currently.temperature)
            } else {
                reject("unable to fetch weather");
                // console.log("unable to fetch weather")
            }
        })
    })
}

asyncCode('unilag').then((res) => {
    console.log(JSON.stringify(res, undefined, 2))
}).catch(e => console.log(e));