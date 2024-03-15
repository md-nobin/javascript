/* 
    Primitive
    7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt
*/

let petName = "Cat"
let age = 24
let isVaccinated = true
let haveKids = null
let nikeName = undefined
let catId = Symbol("224")
let reLife = 200223423n


/*
    Reference (Non primitive)
    3 Types: Array, Objects, Functions
*/

let numbers = ["1", "2", "3", "4", "5"]

let aboutMe = {
    name: "Nobin",
    country: "Bangladesh",
    age: 19
}
console.log(aboutMe)

let byefood = function(){
    console.log("Take your food")
}
byefood()