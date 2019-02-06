'use strict';

var response;
const chatBotOpinion = (weatherDetailsJsonFile) =>{
	if(weatherDetailsJsonFile.current.temp_c < 10)
	{
		response = "Actually, " + weatherDetailsJsonFile.current.temp_c +"degree(s) It's cold so don't forget your coat if you re going out ! :D"; 
	}
	else if (weatherDetailsJsonFile.current.temp_c >= 10 && weatherDetailsJsonFile.current.temp_c < 20){
		response = "Actually, " + weatherDetailsJsonFile.current.temp_c +"degrees, The current temperature is fine but don't get sick";
	}
	else{
		response = "It's " + weatherDetailsJsonFile.current.temp_c +" degrees, Nice weather to enjoy the sun in your garden :D";
	}
	return response;
} 

module.exports = chatBotOpinion;
