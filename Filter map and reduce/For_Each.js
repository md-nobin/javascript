const coding = ["js", "rubby", "java", "python", "CPP"]

const values = coding.forEach((item) => {
    console.log(item)
    return item
})

console.log(values)

const num = [1, 2, 3, 4, 5, 6, 7]

const newNum = num.filter( (number) =>{
     return number > 4
    })

console.log(newNum)