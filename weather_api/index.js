'use strict';
const axios = require('axios');
const apikey =  'b90e9ab3f9ff4861bf8160937190102'; 
//https://api.apixu.com/v1/current.json?key=b90e9ab3f9ff4861bf8160937190102&q=Paris


const getWeather = (location) => {
	return new Promise(async (resolve, reject) => {
		try{
			
			const weatherConditions = await axios.get(
				//get weather info from the api
				//return a json file with the current weather 
				//+ the forecast previsions according to the day
				'http://api.apixu.com/v1/forecast.json',
				{
					params: {
						key: apikey,
						q: location,
						days : 3 //return 3 forecast weather days
					}
				});
				
			resolve(weatherConditions.data);
			//resolve('Success');
			//returns back the results to the chatbot
		}
		catch(error){
			console.log("The city doesnt exist");
			console.log("Please press enter");
			//reject(Error("It broke"));

		}
	});

}

module.exports = getWeather;
/*
22

One of the fundamental principles behind a promise is that it's handled 
asynchronously. This means that you cannot create a promise and then
immediately use its result synchronously in your code (e.g. it's not possible
to return the result of a promise from within the function that
 initiated the promise).

What you likely want to do instead is to return the entire promise itself.
 Then whatever function needs its result can call .then() on the promise,
  and the result will be there when the promise has been resolved.
*/