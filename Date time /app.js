let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString)
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 0, 23, 3, 3)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime())


let timeStamp = Date.now()

console.log(timeStamp)
console.log(Math.floor(Date.now()/100))

let current = new Date()
console.log(current.getDay())
console.log(current.getDate())
console.log(current.toLocaleDateString('defult', {
    weekday: "long"
}))
