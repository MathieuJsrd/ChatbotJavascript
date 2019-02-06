

//console.log(/[sunny|rainy|cold]+( in )+([a-zA-Z]+(?:[ |-][a-zA-Z]+)*$)+[today|tomorrow|after tomorrow]/.test('is it sunny in Berlin today'));


console.log(/[A-Z]/.test('a')); //false
console.log(/[A-Z]/.test('A')); //true
console.log(/^[A-Z]$/.test('a')); //false
console.log(/^[A-Z]$/.test('A')); //true


/*'use strict';
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

  rl.setPrompt('Say Something>');
  rl.prompt();

var cityWeatherDetails="";
function endMeteo(){
  return new Promise(function (resolve, reject){
    weather("Paris").then(function(result){
      cityWeatherDetails = result;
      console.log(cityWeatherDetails);
      resolve("success");
    })
  })
}


endMeteo().then(function(result){
  rl.prompt();
});
*/