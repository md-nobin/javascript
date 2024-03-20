// Named iife

(function bacon (){
    console.log(`DB CONNECTED`)
})();

//unnamed iife
( (name) => {
    console.log(`DB CONNECTED2 ${name}`)
})("food-db")