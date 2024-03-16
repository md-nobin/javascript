// Stack(Primitive), Heap(Non-Primitive)

let personeName = "Abdullah"
let anotherName = personeName

anotherName = "MD Abdullah"

console.log(personeName)
console.log(anotherName)

let user = {
    email: "abc@gmail.com",
    password: 1234
}

let user1 = user

user1.email = "admin@gmail.com"

console.log(user.email)
console.log(user1.email)