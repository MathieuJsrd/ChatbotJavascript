'use strict';

var response = "";
//Prend en input: le json récupéré de l'api 
//Et la réponse de l'utilisateur si elle veut des infos supp (yes|no)
const information = (weatherDetailsJsonFile, userResponse) =>{
	if(userResponse == "yes")
	{
		response = "The date and the time are " + weatherDetailsJsonFile.location.localtime + " and according to apixu.com the weather description says " + weatherDetailsJsonFile.current.condition.text + " for now."
	}
	return response;
} 

module.exports = information;

/*'use strict';

var response ="";
//Prend en input: le json récupéré de l'api 
//Et la réponse de l'utilisateur si elle veut des infos supp (yes|no)
const information = (weatherDetailsJsonFile, userResponse) => {
	return new Promise(async (resolve, reject) => {
		try{
			const answer = await userResponse;
			if(answer == "yes"){
				response = "The date and the time are " + weatherDetailsJsonFile.location.localtime + " and according to apixu.com the weather description says " + weatherDetailsJsonFile.current.condition.text + " for now.";
			}
			resolve(response);
		}
		catch(error){
			reject(Error("It broke"));
		}
	})
} 

module.exports = information;
*/