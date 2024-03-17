const food = ["Pizza", "Sushi", "Burger", "Salad", "Tacos", "Pasta", "Steak", "Chicken Curry", "Pancakes", "Sushi Rolls"]

console.log(food[3])

food.push("Meet")
console.log(food)

food.pop()
console.log(food)

food.unshift("Bread")
console.log(food)

food.shift()
console.log(food)

console.log(food.includes("Sushi"))

// Important for interview. Deference between  slice and splice.

const newFood = ["Lasagna", "Burrito", "Fried Chicken", "Ice-Cream", "Miso Soup"]

let popular = newFood.slice(2, 4)

console.log(newFood)
console.log(popular)
console.log(newFood)

let unLiked = newFood.splice(2, 4)
console.log(unLiked)
console.log(newFood)
