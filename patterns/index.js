var Regex = require("regex");
//var regex = new RegExp(/[A-Z]/);

//Le \b permet d'exiger le mot juste encadré (ici)
//var abc = "[a-zA-Z]+(?:[ |-][a-zA-Z]+)*$";
const entities = [{
	pattern : '\\b(?<greeting>Hi|Bonjour|Hello|Hey)\\b',
	intent : 'Hello'
	},{
	pattern : '\\b(bye|exit)\\b',
	intent : 'Exit'
	},{
	//Pour les questions "Is it be rainy in paris today ?"
	//On part du principe que les questions sont toujours formées de la même façon
	//Pour les ajectifs on les ajoute de facon exhaustive
	pattern : '\\b(?<adjective>(rainy|sunny|cold))\\b \\bin\\b \\b(?<city>[A-Z][a-z]+(?:[ |-][A-Z][a-z]+)*)\\b \\b(?<when>(today|tomorrow))\\b',
	intent : 'Forecast'
	},{
	//pour les questions avec time/weather de l'utilisateur
	//L'ordre des mots n'importe pas ici grace aux [ ]
	pattern : '\\b[time|weather]+[in]+(?<city>[a-zA-Z]+(?:[ |-][a-zA-Z]+)*$)\\b', // working for New York

	//pattern : "\\b(time|weather)\\b \\bin\\b \\b[A-Z]\\b", //inpunt "a" pass => "true"
	
	/*pattern : '\\b[A-Z]\\b', //input "a" ça passe
	pattern : '\\b[A-Z]\\b', //input "A" ça passe
	pattern : '\\b[A-Z]$\\b', //input "a" ça passe
	pattern : '\\b^[A-Z]$\\b', //input "a" ne comprend pas ^
	pattern : '\\b[A|B]\\b', //input "a" ça passe
	pattern : '\\b[A|B]\\b', //input "c" ça passe PAS*/ 
	//PROBLEME : Je n'arrive pas a faire reconnaitre une majuscule


	intent : 'Current Weather' 
	}
	]
module.exports = entities;