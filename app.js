const request = require ("request")


const geocode = require ('./data1.js/geocode')

const country = process.argv[2]

geocode ( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)
   
} ) 