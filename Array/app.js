const food = ["Pizza", "Sushi", "Burger", "Salad", "Tacos", "Pasta", "Steak", "Chicken Curry", "Pancakes", "Sushi Rolls"]

// console.log(food[3])

// food.push("Meet")
// console.log(food)

// food.pop()
// console.log(food)

// food.unshift("Bread")
// console.log(food)

// food.shift()
// console.log(food)

// console.log(food.includes("Sushi"))

// Important for interview. Deference between  slice and splice.

const newFood = ["Lasagna", "Burrito", "Fried Chicken", "Ice-Cream", "Miso Soup"]

// let popular = newFood.slice(2, 4)

// console.log(newFood)
// console.log(popular)
// console.log(newFood)

// let unLiked = newFood.splice(2, 4)
// console.log(unLiked)
// console.log(newFood)

// food.push(newFood)
// console.log(food)

allFood = food.concat(newFood)
console.log(allFood);

let allNewFood = [...food, ...newFood]
console.log(allNewFood)

let multyItem = [1,2,3,[4,5,[6,7,[8,9]]]]
console.log(multyItem)
let usefulMultyItem = multyItem.flat(Infinity)
console.log(usefulMultyItem)

console.log(Array.isArray("nobin"))
console.log(Array.from("Nobin"))

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3))