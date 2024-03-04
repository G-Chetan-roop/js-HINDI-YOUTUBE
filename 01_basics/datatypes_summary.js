//Primitive

// 7 types: String,Number, Boolean, Null, undefined, Symbol , BigInt

// JS is dynamically typed
const score =200
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3544464648546468464644n



// Reference type Non- primitive 

// Array , Objects ,Functions

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "chetan",
    age: 21,

}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof id);
