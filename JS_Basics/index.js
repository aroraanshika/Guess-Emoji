
//data types

// Number
let num = 10;
console.log(typeof num)

//String
// we can use double quotes while defining string 
const FirstName = "Anshika";

// we can define string using single quotes
const LastName = 'Arora';

//we can define string using backticks
const NickName = `Anshi`;

console.log(typeof FirstName);
console.log(typeof LastName);
console.log(typeof NickName);


// //boolean datatype
// we are using let here because boolean value can change
let bool = true;
console.log(typeof bool);

//Undefined 

let x;
//type undefined 
console.log(typeof x);
// value undefined
console.log(x);

//Null 
let b = null;
console.log(b);
// type of b is object this is a bug in js that has not been reolved to maintain legacy
console.log(typeof b);

//Symbol (ES6/2015)

//BigInt (ES2020)
//something that ends with n has type bigint
let v = 10n;
console.log(typeof v);

//Interesting Things
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);

let num3 = Infinity;
console.log(12/0);
console.log(188/Infinity);

