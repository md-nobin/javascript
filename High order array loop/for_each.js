const coding = ["Python", "java", "ruby","CPP", "java script"]

coding.forEach( function (item){
    // console.log(item)
})

coding.forEach( (item) => {
    // console.log(item)
})

function printMe (item){
    // console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [
    {
        name: "Javascript",
        fule: "Js"
    },
    {
        name: "Java",
        fule: "Java"
    },
    {
        name: "Python",
        fule: "py"
    },
]

myCoding.forEach( function(item){
    console.log(item.name)
})