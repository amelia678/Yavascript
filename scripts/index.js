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

// let theDay = prompt("Enter a day (0-6)");
// theDay = parseInt(theDay, 10);

// let work_or_play = `Go to work` ;



// if (theDay === 0) {
//     work_or_play = 'Sleep in';
// }   else if (theDay === 6) {
//     work_or_play = 'Sleep in';
// }
    
// console.log(work_or_play);


// TIP CALCULATOR//

// configuration
// const LEVEL_GOOD = `good`;
// const LEVEL_FAIR = `fair`;
// const LEVEL_BAD = `bad`;

// const TIP_GOOD = 0.2;
// const TIP_FAIR = 0.15;
// const TIP_BAD = 0.1;

// // start with const until something breaks

// const totalBill = parseFloat(`292.34`);
// const levelOfService = `fair`;

// let tip = 0.0;

// if (levelOfService === LEVEL_GOOD) {
//     tip = totalBill * TIP_GOOD;
// }   else if (levelOfService === LEVEL_FAIR) {
//     tip = totalBill * TIP_FAIR;
// }   else if (levelOfService === LEVEL_BAD) {
//     tip = totalBill * TIP_BAD;
// } else{
//     console.log(`Invalid. They can't be that bad`);
// }


// // result
// console.log(`Tip amount: ${tip.toFixed(2)}`);
// console.log(`Total amount: ${(totalBill + tip).toFixed(2)}`);


//  1 to 10 python translation//

// for (let count = 0; count < 10; count++) {
//     console.log(count);
// }

// COINS ////

// need variables for 
// - the user's answer
// - how many coins they have
// 
// 
// console.log(`is this thing on?`);

// let whatUserSaid = `yes`;
// let numberOfCoins = 0;

// while (whatUserSaid === `yes`) {
//     // need a loop that:
//     //  - asks them if they want another coin
//     //  - if so, increment the count
//     //  - print tht number of  coins
//     whatUserSaid = prompt(`Hey, want another?`);
//     if (whatUserSaid === `yes`) {
//         numberOfCoins++;
//     }

//     debugger;
//     console.log(`You have ${numberOfCoins} coins`);
// }

// console.log(`Bye Felicia`);

// CELCIOUS TO FAHRENHEIT//
// with user input in C, convert temp to F

// need variable for:
// - user input in C
//  - fahrenheit conversion
// console.log(`Is this thing on?`);

// let celcius = parseInt(prompt(`Temperature in C?`), 10);
// let fahrenheit = celcius * 1.8 + 32;

// console.log(`${(fahrenheit).toFixed(2)} degrees Fahrenheit`);

// MULTIPLICATION TABLE//

// print multiplication table of numbers 1-10

// console.log(`ready to do some math, kids??`)

// let x = 1;
// while (x < 11) {
//     let y = 1;
//     while (y < 11) {
//         console.log(`${x} x ${y} = ${x *y}`);
//         y++;
//     }
//     x++;
// }

// FIZZBUZZ//
// -print a list of numbers 1-100
//  - if a multiple of 3 and 5 (aka 15) print fizzbuzz
// -  if a multiple of 3 print Buzz
// - if a multople of 5 print Fizz
// let num = 1;

// while (num < 101) {
//     if (num % 15 === 0) {
//         console.log(`FizzBuzz`);
//     }   else if (num % 3 === 0) {
//             console.log(`Buzz`);
//     }   else if (num % 5 === 0) {
//             console.log(`Fizz`);
//     }   else  {
//         console.log(num);
//     }
//     num++;
// }

// CAPITALIZE//

// const whoami  = `i'm batman`;

// const first = whoami.slice(0,1).toUpperCase();

// // in python, this would be: whoami[1:]
// const rest = whoami.slice(1);
// console.log(first + rest);

// console.log(`The length of the string is ${whoami.length} chars`);

// LEETSPEAK//
const text = `i dont think you're ready for this jelly`;

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers          = ['4', '3', '6', '1', '0', '5', '7'];

const textToTranslate = text.toUpperCase();
let translation = ``;

// ES6 style array iteration
// basically the equivaldnt of python's for loop
for (let letter of textToTranslate){
    // console.log(letter);
    // check to see if the current letter is in `lettersToConvert`
    // if so, grab the index
    let index = lettersToConvert.indexOf(letter);
    if (index !== -1) {
        let index = lettersToConvert.indexOf(letter);
    
    // use the index to grab the corresponding item from `numbers`
    translation = translation + numbers[index];
    } else {

        // else, just use the original letter
        translation = translation + letter;    
    }
}


console.log(translation);