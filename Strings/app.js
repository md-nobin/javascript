const name = "Nobin "
const repoCount = 19

// Not recomended 👇
// console.log(name  + repoCount + "Value") 

// Recomended 👇
console.log(`Hello my name is ${name} and my repo countis ${repoCount}`);


const name1 = new String("Sagar")

console.log(name1[0])
console.log(name1.__proto__)
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.charAt(1))
console.log(name1.indexOf("g"))

const fulName = "MD-Nobin"
console.log(fulName.substring(0, 2))
console.log(fulName.slice(3, 8))
console.log(fulName.split('-'))

const newString = "    nbn  "
console.log(newString)
console.log(newString.trim())

const url = "https://github.com/md%20nobin"
console.log(url.replace('%20', '-'))