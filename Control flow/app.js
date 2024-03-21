const isUserloggedIn = true

if (isUserloggedIn == true){
    console.log(isUserloggedIn)
}

if (isUserloggedIn == false){
    console.log(isUserloggedIn)
}else{
    console.log("Users are not in");
}

// <, >, <=, >=, ==, !=, ===, !===

const score = 150

if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`)
}

// console.log(power)

const balance = 1000
if (balance > 500) console.log("Test")


if (balance < 500){
    console.log("Less than 500")
} else if (balance < 750) {
    console.log("less than 750")
}else if(balance < 900 ){
    console.log("less than 900")
}else if (balance < 999){
    console.log("less than 999")
}else if (balance == 1000){
    console.log("1000")
}else{
    console.log("gretter than 1000")
}


const userLoggedIn1 = true
const debitCard = true
const loggedInFormGoogle = false
const loggedInFormGmail = true

if (userLoggedIn1 && debitCard){
    console.log("Get milk")
}

if (loggedInFormGoogle ||  loggedInFormGmail){
    console.log("User logged in")
}