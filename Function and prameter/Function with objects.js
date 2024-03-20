function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 9000))

const user = {
    username: "Unknown",
    bill: 1010
}

function handelobjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.bill}`)
}

// handelobjects(user)

handelobjects({
    username: "Unknown",
    bill: 1010
})


const myArray = [10, 20, 30, 40, 50]

function returnSecoundVal (getArray){
    return getArray[1]
}

// console.log(returnSecoundVal(myArray))

console.log(returnSecoundVal([200, 300, 400]));
