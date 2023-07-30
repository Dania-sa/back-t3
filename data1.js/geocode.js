const request = require ('request')

const geocode = (address , callback) => {
    const geocodeUrl = 'http://api.weatherapi.com/v1/current.json?key=0d6716c382354eb6b89153906232907&q=' +address
    
    request ({url : geocodeUrl , json : true} , (error , response) => {
        if (error) {
            callback ("unable to connect geocode Service" , undefined)
        }
        else if (response.body.error ) {
            callback (response.body.error.message  , undefined)
        }
        else {
            callback (undefined , {
                longtit : response.body.location.lat,
                latit : response.body.location.lon,
                weather : response.body.current.condition.text,
                temp : response.body.current.temp_c
            } )
        }
    } )
    }

    module.exports = geocode;