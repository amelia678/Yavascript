// Yep, another comment style

// console.log("hello javascript what up");

// hello.py
// getting input(it's lame)

// using var
// // and camelCase
// var promptText = 'What is your name?';
// var userName = prompt(promptText);

// // uses string concatenation
// var greeting = 'Hello, ' + userName + '!';
// console.log(greeting);

// now using sexy syntaxxx
// using let and const
// rule of thumb: use const until you get an error

// const promptText = 'What is your name?';
// const userName = prompt(promptText);
// // string interpolation
// // 1. replace quotes with backticks
// // 2. remove the + signs
// // 3. wrap your variables in ${}
// const greeting = `Hello, ${userName} !`;
// console.log(greeting);
// MADLIBS//
// using backticks for hipster strings
// const name = 'amelia schulz';
// const subject = `biology`;

// const finalText = `${name}'s favorite subject in school
// is ${subject}.


// How lame.
// `;


// console.log(finalText);

// DAYS OF THE WEEK//
// To convert from a string to a number,
// use parseInt and provide base 10 as an argument

// let theDay = prompt("Day (0-6)");
// theDay = parseInt(theDay, 10);


// let dayName = `Invalid choice, buddy.`;
// // you must use parentheses for your condition!!
// // "loose" equality is ==
// // "strict" equality is ===
// // by default, use strict equality, ===
// // "threequals"
// if (theDay === 0) {
//     dayName = 'Sunday';
// } else if  (theDay === 1) {
//     dayName = 'Monday' ;
// } else if (theDay === 2) {
//     dayName = 'Tuesday';
// } else if (theDay === 3) {
//     dayName = 'Wednesday';
// } else if (theDay === 4) {
//     dayName = 'Thursday';
// } else if (theDay === 5) {
//     dayName = 'Friday';
// } else if (theDay === 6) {
//     dayName = 'Saturday';
// }
// // the body of an if statement is surrounded
// // by curly braces.
// // And does not require a semi-colon after 
// // the curly braces.
// console.log(dayName);

// WORK OR SLEEP IN?//

let theDay = prompt("Enter a day (0-6)");
theDay = parseInt(theDay, 10);

let work_or_play = `Go to work` ;



if (theDay === 0) {
    work_or_play = 'Sleep in';
}   else if (theDay === 6) {
    work_or_play = 'Sleep in';
}
    
console.log(work_or_play);
