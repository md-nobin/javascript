const user = {
    userName: "Unknown",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
user.userName = "sam"
// user.welcomeMessage()

function coffee (){
    let user = "unknown"
    console.log(this.user)
}

// coffee()


const latte = function (){
    let user = "unknown"
    console.log(this.user)
}

// latte()

const greenTea =  () => {
    let user = "unknown"
    console.log(this.user)
}

// greenTea()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(2, 3))

const add = (num1, num2) => (num1 + num2)

// console.log(add(1,2))

const returnObject = (userName, age) =>({
    userName: "unknown",
    age:10
})

console.log(returnObject())
