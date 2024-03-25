const books = [
    { id: 1, title: "Himur Bokkobihar", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1990" },
    { id: 2, title: "Himur Ditiyo Prohor", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1992" },
    { id: 3, title: "Himur Harvard Pitch", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1993" },
    { id: 4, title: "Himur Moddho Raatri", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1994" },
    { id: 5, title: "Himur Rupali Ratri", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1995" },
    { id: 6, title: "Himur Rimande", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1996" },
    { id: 7, title: "Himur Amar Maayer Santan", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1997" },
    { id: 8, title: "Himur Dhuittur", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1998" },
    { id: 9, title: "Himur Expedition", author: "Humayun Ahmed", category: "Upônash", publishedDate: "1999" },
    { id: 10, title: "Himur Mamaar Golpo", author: "Humayun Ahmed", category: "Upônash", publishedDate: "2000" },
    { id: 11, title: "Himur Cartoon", author: "Humayun Ahmed", category: "Cartoon", publishedDate: "2001" },
    { id: 12, title: "Himur Ebong Harvard Prothom Prohor", author: "Humayun Ahmed", category: "Upônash", publishedDate: "2002" },
    { id: 13, title: "Himur Nikhash", author: "Humayun Ahmed", category: "Upônash", publishedDate: "2004" },
    { id: 14, title: "Himur Ashi Apon Kana", author: "Humayun Ahmed", category: "Upônash", publishedDate: "2005" },
    { id: 15, title: "Himur Ar Himu", author: "Humayun Ahmed", category: "Upônash", publishedDate: "2006" }
  ];
  
let userBooks = books.filter( (bk) => {
  if (bk.publishedDate == 2000){
    console.log("Himur Mamaar Golpo")
  }
})

let newRelise = books.filter( (bks) => {
  return bks.publishedDate >= 2000

}) 

console.log(newRelise)
  
console.log("Books published before 2000");

let oldRelise = books.filter((old) => {
  return old.publishedDate < 2000
})
console.log(oldRelise)