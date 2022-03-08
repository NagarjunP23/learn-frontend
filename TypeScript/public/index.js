"use strict";
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// });
//array
let names = ['luigi', 'mario', 'yoshi'];
names.push('ninja');
//not possible cause of diff type
//names.push(3);
//can have mixed array
let mix = [2, 'luigi', 'mario', 'yoshi'];
mix.push('ninja');
mix.push(6);
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 20
};
ninja.age = 30;
ninja.belt = 'yellow';
//not possible
//ninja.age = '33';
//explicit types
let char;
let age;
let isLoggedIn;
//arrays
let arr = [];
arr.push('asdf');
//doesnt work 
let a;
//will show error in console as array is only declared not initialized
//a.push('gkhh');
//union typee
//can store both string and number
let mixed = [];
mixed.push('sudfbgvu');
mixed.push(2);
//union type for normal variable
let uid;
uid = 123;
uid = '123';
//object
let ninjaOne;
ninjaOne = { name: 'mario', age: 30 };
let ninjaTwo;
//we can also use type 'any' to assign any value including object 
//functions
let greet;
greet = () => {
    console.log('hello');
};
const add = (a, b, c /*= 10*/) => {
    console.log(a + b);
};
add(5, 10); //if ? not used then give value for c or else error
const log = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greets = (user) => {
    //code
};
