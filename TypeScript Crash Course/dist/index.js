"use strict";
//Basic types
let id = 5;
let company = 'Traversy';
let published = true;
//any type
let a = 'hello';
a = 4;
a = true;
//arrays
let ids = [1, 2, 3, 4, 5, 6];
ids.push(19);
//not allowed
//ids.push('hello')
let arr = [1, 'hello', true];
//tuple
let person = [1, 'brad', true];
//tuple array
let emp;
emp = [
    [1, 'brad'],
    [2, 'ninja'],
    [3, 'tanay']
];
//union 
let pid;
pid = 22;
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["rigth"] = 4] = "rigth"; //3
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
})(direction2 || (direction2 = {}));
//objects
// const user = {
//     id: 1,
//     name : 'brad'
// }
//type assertion
let cid = 1;
// let customerid = <number>cid
let customerid = cid;
//functions
function add(x, y) {
    return x + y;
}
//void 
function log(message) {
    console.log(message);
}
//interface
// interface user {
//     id: number,
//     name : string,
//     age?:number  //optional
// }
// const user1: user = {
//     id: 2,
//     name: 'brad'
// }
//classes
class persons {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new persons(1, 'Brad Traversy');
class person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return 'Implemented';
    }
}
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(['brad', 'shawn', 'jill']);
strArray.push('tanay');
//
