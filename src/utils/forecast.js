const request = require("request")

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=51a169f24e9961bb6477f928d4463a60&query=' + encodeURIComponent(latitude) +',' + encodeURIComponent(longitude) + '&units=m'
    // console.log(url);
    
    

    request({ url, json: true},(error, {body} = {} ) => {
        if(error){
            callback("unable to connect to the services",undefined)
        } else if (body.error){
            callback("unable to find the location. Try another search", undefined)
        } else{
            callback(undefined,(
                "Temperature is " + body.current.temperature +  " degrees. It feels like it is " + body.current.feelslike + " degrees. It is " + body.current.weather_descriptions[0] + ". Humidity is " + body.current.humidity + "%." 
            //     temperature: body.current.temperature,
            //     location: body.location.name,
            //     feelslike: body.current.feelslike,
            //    overcast : body.current.weather_descriptions[0],
            //    humidity : body.current.humidity

            )
       )
}

    })


}

module.exports = forecast