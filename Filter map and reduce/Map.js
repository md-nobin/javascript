let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNum = numbers.map((num) => {
    return num + 10 
})

console.log(newNum)

let num = numbers.map((num) => {
    return num * 10
}).map( (num) => {
    return num + 1
}).filter((num) => {
    return num >= 30
})

console.log(num)