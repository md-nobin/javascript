/* 
    falsey value: fals, 0, -0, bigInt 0n, "", undefined, NaN
    Truthy value: "0", 'false', " ", [], {}, function(){}
*/


const userEmail = "N@gmail.com"

if (userEmail){
    console.log("Got the user email")
} else{
    console.log("Don't have user email")
}

userBalance = []

if (userBalance.length == 0){
    console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length == 0){
    console.log("Object is empty")
}


// Nullish Coalescing Oprator(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1)

let val2;
val2 = undefined ?? 15

console.log(val2)

let val3;
val3 = null ?? 10 ?? 20

console.log(val3)

// Ternaiary Operator

const price = 100

price <= 80 ? console.log("less than 80"): console.log("More than 80")
