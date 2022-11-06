// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we make a comparison. 
// If the value we set for name is an exact match for 'Mary', we console.log 'Hi, Mary!'
// If the value we set for name is NOT 'Mary', we console.log 'How do you do?'
// 'Dane' does not equal 'Mary', so we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret without an assigned value, and we make a variable called code with a value of 123 as a number.
// Then we make a comparison.
// If the variable code is an exact match to 123, then the variable secret is assigned the value 'super' as a string and the value of code becomes code multiplied by 2.
// If the variable code is greater than 250, then the variable secret is assigned the value 'duper' as a string.
// The variable code is an exact match to 123, so secret is assigned the value 'super' as a string and the value of code becomes code multiplied by 2 (246).
// We console.log secret which returns the result 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent with the boolean value true, a variable called age with the numerical value 34, and a variable zip with the numerical value 55407.
// Then we make a comparison.
// If the value of isStudent is true AND the value of zip is greater than 80000, we console.log 'You're a student on the West Coast!'.
// If the value of isStudent is false OR the value of age is less than 30, we console.log 'What are your hobbies?'.
// If the value of isStudent is true, we console.log 'Welcome to Prime!'.
// If the variables do not apply to any of the above statements, we console.log 'How about the weather?' (but I couldn't get any change in the variables above to generate this result).
// Given the variables we defined, we would console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



// 4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - instructions indicate that the colorOne and colorTwo variables should have their values reversed.
// Should be:
// let colorOne = 'blue';
// let colorTwo - 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - instructions indicate that the colorOne and colorTwo variables should both be set to 'purple' if mix is true.
// Should be:
// if (mix === true) {
//   colorOne = 'purple';
//   colorTwo = 'purple';
// }
if (mix === true) {
  colorOne = 'purple';
}
*/

// 5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// FIX - const time should be changed to let time, as time is not a constant & can change.
// Should be let time = 4;
let temp = 40;
const time = 4;

// FIX - the instructions indicate that temp should be higher than 39 AND time should be great than/equal to 4, but the below indicates OR
// Should be:
// if (temp > 39 && time >= 4) {
//   console.log ('throw away the food!');
// }
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// 6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the instructions indicate that when age is greater than or equal to minAge, we console.log 'enter'.
// The below is set up to compare the correct variables, but console.logs 'no entry' if minAge is less than/equal to age. This would give all ages 21+ the 'no entry' result. 
// Additionally, the 'no entry' console.log is not mentioned at all in the instructions, and the minAge & age variables are not written in the same order as given in the directions. 
// Should be:
// if (age >= minAge) {
//   console.log ('enter');
// }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

