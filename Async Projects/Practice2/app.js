/*
    const sayDate = function(str){
    console.log("I love My country", str , Date.now())
    }

    const intervaleId = setInterval(sayDate, 1000 , "Hello")
    clearInterval(intervaleId)
    */


    const randomColor = function(){
        const hax = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++){
            color += hax[Math.floor(Math.random() * 16)]
        }
        return color
    }
    console.log(randomColor())
    
    let intervaleId

    const startChangingColor = function(){
        if(!intervaleId){
            intervaleId = setInterval(changeBgColor, 1000)
        }

        function changeBgColor (){
            
            document.body.style.backgroundColor = randomColor()
        }
    }
    const stopChangingColor = function(){
        clearInterval(intervaleId)
        intervaleId = null
    }

    document.querySelector("#start").addEventListener("click", startChangingColor)
    document.querySelector("#stop").addEventListener("click", stopChangingColor)