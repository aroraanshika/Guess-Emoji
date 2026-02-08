// var RegEx = new RegExp("pattern");

// var Regex = "/pattern/";


var text = "Hello wooorld";
var regex = /world/;

if (regex.test(text)) {
    console.log("Match found");
} else {
    console.log("No match");
}


// what if we need to check if this regex contains digits

var text = "hello my age is 23";
/* /  /  -> regex 
d -> numbers from 0 -9 
+ -> more than 1 time
*/
var regex = /\d+/;

var result = text.match(regex);
console.log(result);


// replace regex expression 

var text = "i like cats";
var regex = /cats/;
var newtext = text.replace(regex,'dogs');
console.log(newtext);


// ignore casing 

var pattern = "hello";
// i is for ignore casing
var regex = new RegExp(pattern, "i");

console.log(regex.test("Hello World"));


