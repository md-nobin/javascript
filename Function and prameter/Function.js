function myName (){
    console.log("N")
    console.log("O")
    console.log("B")
    console.log("I")
    console.log("N")
}

// myName()

function addNumber (num1, num2){
    console.log(num1 + num2)
}

const result = addNumber(2,2)
console.log(result)

function multyply (num1, num2){
    return num1 + num2
}

const multiResult = multyply(2, 2)
console.log(multiResult)

function userGreeting (userName, ) {
    if (!userName){
        console.log("Please enter a user name")
    }
    else{
        return `Welcome ${userName}`
    }
        
}

console.log(userGreeting("Nobin"))
