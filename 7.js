let blogPost = {
    name: "Animals",
    aftor: "Mike Olivyer",
    date: "20.01.2002",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse voluptates ipsa est temporibus sint, dolorum nulla. Distinctio maxime corrupti, suscipit adipisci esse culpa veritatis laboriosam dignissimos officiis maiores recusandae.",

    foto: "https://wallpaperaccess.com/full/1222684.jpg",
    tag: "#beautiful, #animals, #wood"
}

let key = prompt("Что вы хотите узнать о поста? aftor, date, text, foto, tag", "name" );
document.write( blogPost[key]);
console.log(blogPost)
