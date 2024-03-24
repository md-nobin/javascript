const num = [1, 2, 3, 4, 5]

for (const i of num) {
    console.log(i)
}

const food = "Banana"

for (const i of food) {
    console.log(i)
}

// Maps

const map = new Map()

map.set("BN", "Bangladesh")
map.set("IN", "India")
map.set("FR", "France")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}

const myObj = {
    Game1: "NFS",
    Game2: "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(key, "-:", value)
// }

for (const key in map) {
    console.log(key)
}