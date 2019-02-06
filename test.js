/*


SYMBOLS
. — (period) Matches any single character, except for line breaks.
* — Matches the preceding expression 0 or more times.
+ — Matches the preceding expression 1 or more times.
? — Preceding expression is optional (Matches 0 or 1 times).
^ — Matches the beginning of the string.
$ — Matches the end of the string.


CHARACTER GROUPS
\d — Matches any single digit character.
\w — Matches any word character (alphanumeric & underscore).
[XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
[XYZ]+ — Matches one or more of any of the characters in the set.
[^A-Z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.


FLAGS
There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
g — Global search
i — case insensitive search


ADVANCED
(x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
(?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
x(?=y) — Lookahead: Matches x only if it is followed by y.
*/

//-----------------------------------------------------------------

//console.log(/\d\d-\d\d/.test('12334'));
//false
//console.log(/\d+-\d+/.test('1-234'));
// true
//console.log(/\d+-\d+/.test('-34'));
// false

//Le "ow" doivent obligatoire être entre "me" et "w"
//Grace au plus chaque groupe peut etre répété 1 à plusieurs fois
/* /me+(ow)+w/
m     => matching a single letter 'm'
e+    => matching the letter 'e' one or more times
(ow)+ => matching the letters 'ow' one or more times
w     => matching the letter 'w' once
'm' + 'eeee' +'owowow' + 'w'*/
//console.log(/me+(ow)+w/.test('mmmmmemeeeeeowowowwwww'));
// true

// The ? operator. This makes the preceding character optional.

//console.log(/cats? says?/i.test('the Cat says meow'));
// true

//console.log(/Cats? says?/.test('the cats say meow'));
// false car le /i ne prend pas en compte les différences de majuscule

//console.log(/C?ats? says?/.test('the cats say meow'));
// true car le ? après le C le rend optionnel

//console.log(/Cats? says?/i.test('the cats say meow'));
// true
//console.log(/in +(^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$)/.test('New York'));
//console.log(/((in )+[A-Za-z0-9_])/.test('what is the time New York'));
console.log(/([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test('New York'));
//NB :
// if you ever want to search for a slash, you need to escape it with a backslash
//Same with other special characters
//var slashSearch = /\//;
//var questionSearch = /\?/;

//\d is the same as [0-9]: Each match a digit character
//\w is the same as [A-Za-z0-9_]: Each matches any single alphanumeric character or underscore
//console.log(/\w/.test('W'));
//true
//console.log(/\w/.test('Wlfglklsdqesklfnlsq'));
//true

//-------------------------------------------------------------
//Add spaces
//'camelCase' : This will match the C in 'camelCase' : /[A-Z]/g

// => Use capturing parenthesis to remember our matched capital letter
///([A-Z])/
//Access the captured value later with
//$1
//So here we take the capital letter and replace it by ' capitalLetter'
function removeCc(str){ //retourne une string
  return str.replace(/([A-Z])/g, ' $1');  
}
//removeCc('camelCase'); // 'camel Case'
//console.log(removeCc('helloWorldItIsMe')); // 'hello World It Is Me'

//-------------------------------------------------------------
//Replace capital character by lower character
function lowerCase(str){
	return str.replace(/[A-Z]/g, (u) => u.toLowerCase());
}
//console.log(lowerCase('Camel Case')); //camel case

//------------------------------------------------------------
//Capitalize first letter

//Let’s look at ^ in depth for a second. Recall this example from earlier:
//console.log(/cat/.test('the cat says meow'));
// true
//When we add in the ^ the function no longer returns true due to the fact that ‘cat’ is not at the beginning of the string:
//console.log(/^cat/.test('the cat says meow'));
// false

function capitalize(str){
  return str.replace(/^[a-z]/, (u) => u.toUpperCase());
}
//console.log(capitalize('hello world it is me')) // 'Hello world it is me')