// new Array - другой способ объявить массивы!
let blogPost = new Array  (
     "Animals",
     "Mike Olivyer",
     "20.01.2002",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse voluptates ipsa est temporibus sint, dolorum nulla. Distinctio maxime corrupti, suscipit adipisci esse culpa veritatis laboriosam dignissimos officiis maiores recusandae.",
    "https://wallpaperaccess.com/full/1222684.jpg",
    "#beautiful, #animals, #wood"
)



// такой пункт нету в задании, я добавил просто для разнообразие
let key = prompt("Что вы хотите узнать о поста? 0-name 1-aftor, 2-date, 3-text, 4-foto, 5-tag",);
document.write( blogPost[key]);
console.log(blogPost)
