// singleton
Object.create

// Object literals

const mySymb = Symbol("Key1")

const user = {
    name: "Unknown",
    age: 10,
    location: "Dhaka",
    [mySymb]: "key1",
    email: "unknown@gmail.com",
    loggin: false,
    lastLoginDay: ["Monday", "Saturday"]

}

console.log(user['email'])

console.log(user.email)
console.log(typeof user[mySymb])
console.log(user[mySymb])

user.email = "admin@gmail.com"

// console.log(user.email)
// Object.freeze(user)

user.email = "unknown@gmail.com"
console.log(user.email)

user.greeting = function(){
    console.log("Hello web user")
}

console.log(user.greeting())

user.greeting2 = function(){
    console.log(`Hello web user ${this.name}`)
}

console.log(user.greeting2())