'use strict';

/*This Chatbot gives the weather of all cities of the word through an API apixu.com
He can answer severals questions
- What is the time/weather in <city>?
- Is it cold/sunny/rainy in <city> today/tomorrow
*/


//On récupère le dictionnaire des patterns du chatbot pour qu'il puisse répondre
const readline = require('readline');//for including readline module in your application
var readlineSync = require('readline-sync'); //will wait for user's reponse

const rl = readline.createInterface({ //create an interface object
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher/index.js'); //to use the matcher module here
const weather = require('./weather_api/index.js'); //get back a promise object
const opinion = require('./chatbot_opinion/index.js');
const suppl_information = require('./supplementary_information/index.js');
const specificQuestion = require('./specific_questions/index.js');

	rl.setPrompt('Say Something>');
	rl.prompt();
	rl.on('line', reply =>{
//callback with a variable called data to capture an object 
//that contains expression matcher result
//console.log(reply);
//Qu'importe ce que dit l'utilisateur
//1erement il rentre dans le intent 'Hello' du dico index.js
//en comparant Hello, Hi, Bonjour, Hey  avec ce qu'a dit l'utilisateur
//si ça match, alors il répond

//On supprime le ? au cas ou l'utilisateur en ait mis un dans sa réponse
// + les espaces en début et fin de string
//console.log(reply+">");
reply = reply.replace("?", "").trim();
//console.log(reply+">");

	matcher(reply, data => {
		switch(data.intent){

			case 'Hello':
				console.log(`${data.entities.greeting} to you ! :D`); //
				rl.prompt();
				break;

			case 'Exit' :
				console.log("Have a great day!");
				process.exit(0);
				break;

			case 'Current Weather' :
				//console.log(`la ville enregistrée est : ${data.entities.city}`)
				endMeteo(data).then(function(result){
					rl.prompt()

				})
				break;
			case 'Forecast' :
				//http://www.apixu.com/doc/forecast.aspx
				//Apixu explains that all the forecast information is sent through an specific object
				//A forecast
				//Link explan how to read it
				//https://github.com/apixu/apixu-nodejs/blob/master/examples/forecast.js
				//console.log(`Adj : ${data.entities.adjective} et ville : ${data.entities.city} et when : ${data.entities.when}`);
				endSpecificQuestion(data).then(function(result){
					rl.prompt();
				})
				break;
			default:{
				console.log("I don't know what you mean :(");
				rl.prompt();
				}	
		}
	});
});


//All about async function
//https://www.supinfo.com/articles/single/5640-programmation-asynchrone-javascript
//Explain how to keep control on the compilation with promises	

var cityWeatherDetails;
function endMeteo(data){
  return new Promise(function (resolve, reject){
    weather(data.entities.city).then(function(result){
     	 cityWeatherDetails = result;
      
      	//All details from the json file
      	//console.log(cityWeatherDetails);
      
     	 //Forecast Objects Lecture
      	//const days = cityWeatherDetails.forecast.forecastday;
     //const todayDate = days[0].date;
     //const tomorrowDate = days[1].date;
     //console.log(days[1].day.maxtemp_c);
     //console.log(days[1].day.condition.text);
      

      console.log('\x1b[37m%s\x1b[31m%s\x1b[37m%s', opinion(cityWeatherDetails) + '\n-If you need ', ' more information ', 'tell me ! :)');
      
      //on Refait une promesse pour attendre d'avoir reçu les infos supplémentaires
      //voir suite

    }).then(function(result){
    	rl.question('yes|no>', function(answer) {
    		console.log(suppl_information(cityWeatherDetails, answer));
    		//A partir de maintenant on peut passer a la suite grace au resolve
    		//Ici la suite étant la fin de endMeteo et donc rl.prompt() avec SaySomething
    		resolve("success");
		});

    })
  })
}

function endSpecificQuestion(data){
	return new Promise(function (resolve, reject){
		//All the data from the user is stocked
		weather(data.entities.city).then(function(result){
			//get all the JSON for the weather information
			cityWeatherDetails = result;
			//the string from the specific_question folder
			var messageFromModule = specificQuestion(cityWeatherDetails, data.entities.adjective, data.entities.when);
			console.log('\x1b[32m%s\x1b[37m%s', messageFromModule, "."); //green
			resolve("success");
		})
	})
}
