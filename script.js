/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
let PI = 3.14125

//good variable names
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

//bad variable names
let job1 = 'programmer';
let job2 = 'teahcer';

//console.log print statement
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


// declaring a variable allows you to change information in multiple places at once

//camelCase is the standard form of naming in JS

// cannot start a variable name with an integer

// variable names can only contain numbers, letters underscores, or the dollar sign.

// variable names cannot be js reserved keywords (name is somewhat reserved)

// variable names be lowercase unless declaring a class (OOP)

// Variables in all caps are reserved for variables we know will be constant IE. let PI = 3.14125

// variable names should be clear and accurate
*/


/*
//boolean [returns: true]
let javascriptIsFun = true;
console.log(javascriptIsFun);

//'operator' introduced [returns: boolean]
console.log(typeof true); 
console.log(typeof javascriptIsFun); 
console.log(typeof 23); 
console.log(typeof 'Mike'); 

//dyanmic typing example [returns: string]
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); 

//undefined [returns: undefined | undefined]
let year;
console.log(year);
console.log(typeof year); 

year = 1991;
console.log(year);
console.log(typeof year); 

//null [returns: object???]
console.log(typeof null);
*/

/*
//reassigning a variable (mutating the age value)
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; 

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Allen'
console.log(lastName)
*/
/*
//Math Operators
const now = 2022;
const ageMike = now - 1986;
const ageSarah = now - 2003;
console.log(ageMike,ageSarah);

console.log(ageMike * 2, ageSarah / 2 );

console.log(ageMike * 2, ageSarah /10, ageMike ** 3);
// ageMike ** 3 means ageMike(value) * ageMike(value) * ageMike(value)

const firstName = 'Mike';
const lastName = 'Allen';

//concantenation
console.log(firstName + ' ' + lastName);

//assingment operators

let x = 10 + 5;  // 15
//in this case the equal is an assignment operator, assigning a variable. the order goes from rightsied to the left side. So 15 is calculated before x is defined

x += 10; // 25             x = x +10 (same output)
console.log(x);
x *= 4; // 100
x++; //101
x--; //100
console.log(x);

//Comparison Operators
console.log(ageMike > ageSarah);
console.log(ageMike < ageSarah);
console.log(ageMike >= ageSarah);
console.log(ageMike <= ageSarah);

console.log(now - 1991 > now - 2018);
// JS knows to calcualter the now - X first, then compare the two values to display the boolean value in the console log.
*/
/*
const firstName = 'Mike';
const job = 'Developer';
const birthYear = 1986;
const year = 2022;
//old school
const mike = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
//in the case above JavaScript will automatically convert the integer derived from year - birthYear into a string.  This is called type corrosion
console.log(mike);
//new school
const mikeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mikeNew);
// can use backtics for all strings if you wantes
console.log(`you can use backtics for all strings...`);

//multi-line pre es6
console.log('String with \n\
multiple \n\
lines');
// es6 template literal
console.log(`String
multiple
lines`);
*/
/*
const age = 19;

if(age >= 16) {
  console.log('Sarah can start her driving license 🚗')
} else {
  const yearsLeft = 16 - age;
  console.log(`Sarah is too young 🥲. Wait another ${yearsLeft} years.`)

}

const birthYear = 1986;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
