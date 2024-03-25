// let myNum =  [1, 2, 3, 4]

// const total = myNum.reduce((accum, currentVal) => {
//     console.log(`acc ${accum} and vurrentVal ${currentVal}`)
//     return accum + currentVal
// }, 0)

// console.log(total)

let shoppingCart = [
    {
        itemName: "Hamburger",
        price: 299
    },
    {
        itemName: "Cheeseburger",
        price: 499
    },
    {
        itemName: "Sandwich",
        price: 399
    },
    {
        itemName: "Milkshake",
        price: 199
    },
]

const totalBill = shoppingCart.reduce((acc, item) => {
    return  acc + item.price
}, 0)

console.log(totalBill)