for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5){
        // console.log("5 Is favorite number")
    }
    // console.log(element)


}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j}`)
        // console.log(i + "*" + j + " = " + i*j)
    }

}

const food = ["Pizza", "Sushi", "Burger", "Salad", "Tacos", "Pasta", "Steak", "Chicken Curry", "Pancakes", "Sushi Rolls"]
// console.log(food.length)
for (let index = 0; index < food.length; index++) {
    const element = food[index]
    // console.log(element)
    
}

const num = 20

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("detect 5")
        continue
    }
    const element = index
    console.log(element)
}