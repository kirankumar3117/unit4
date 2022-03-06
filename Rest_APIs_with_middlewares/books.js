//  async function books(){
// let res=await fetch(`https://www.googleapis.com/books/v1/volumes?q=HarryPoter+1`);
// let data=await res.json();
// console.log(data.items)
// return data.items;
// }
// books();
let book=[
    {
        HarryPotter:[
        
                "Fantastic Beasts and Where to Find Them: Cinematic Guide: Newt Scamander Do Not Feed Out",
                 "Harry Potter: The Complete Collection (1-7)",
                 "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition",
                 "Harry Potter",
                "Harry Potter and the Sorcerer's Stone",
                 "Harry Potter and the Cursed Child",
                 "The Psychology of Harry Potter",
                 "Harry Potter and the Half-Blood Prince",
                "Harry Potter and Philosophy",
                 "Harry Potter the Complete Series"
             
        ]
    
    },
    {
        GameOfThrones:[
            "Inside HBO's Game of Thrones",
            "A Game of Thrones (A Song of Ice and Fire, Book 1)",
            "Game of Thrones",
            "Mastering the Game of Thrones",
            "A Game of Thrones 4-Book Bundle",
            "The Art of Game of Thrones, the Official Book of Design from Season 1 to Season 8",
            "Women in Game of Thrones",
            "Inside HBO's Game of Thrones",
            "Game of Thrones and Philosophy",
            "Game of Thrones: The Postcard Collection"
        ]
    },
    {
        Lucifer:[
            "Lucifer Book One",
            "Lucifer Book of God",
            "The Lucifer Principle",
            "Lucifer",
            "I, Lucifer",
            "Lucifer",
            "The Fall of Lucifer",
            "The Road to Hell: The Book of Lucifer",
            "God's Wife Was Lucifer",
            "Lucifer Book Five"
        ]
    },
    {
        name4:"Once Up On A Time"
    },
    {
        name5:"One Piece"
    },
    {
        name6:"DJ Tillu"
    }
];
module.exports=book;
// function books(){
//     return book;
// }
// var books=[]
// fetch('https://www.googleapis.com/books/v1/volumes?q=HarryPoter')
// .then(res => res.json())
// .then(json => {
//     console.log("First user in the array:");
//     console.log(json[items]);
//     console.log("Name of the first user in the array:");
//     console.log(json[0].name);
// })

