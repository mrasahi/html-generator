function Movie (title, genre, releaseYear){
    this.title = title
    this.genre = genre
    this.releaseYear = releaseYear
}

function Game (title, genre, releaseYear){
    this.title = title
    this.genre = genre
    this.releaseYear = releaseYear
}

function Food (name, typeOfCuisine, tasty){
    this.name = name
    this.typeOfCuisine = typeOfCuisine
    this.tasty = tasty
}

function Song (title, genre, artist){
    this.title = title
    this.genre = genre
    this.artist = artist
}

let Shrek = new Movie('Shrek', 'Comedy', 2001)
let Shrek2 = new Movie('Shrek 2', 'Comedy', 2004)
let Despicable = new Movie('Despicable Me', 'Comedy', 2010)
console.log(Shrek, Shrek2, Despicable)

let Pokemon = new Game('Pokemon Blue', 'RPG', 1995)
let Monster = new Game('Monster Hunter World', 'Action', 2018)
let Valorant = new Game('Valorant', 'FPS', 2020)
console.log(Pokemon, Monster, Valorant)

let Spaghetti = new Food('Spaghetti', 'Italian', true)
let Sushi = new Food('Sushi', 'Japanese', true)
let Orange = new Food('Orange Chicken', 'Chinese-American', true)
console.log(Spaghetti, Sushi, Orange)

let Memories = new Song('Memories', 'Pop', 'Maroon 5')
let Imagine = new Song('Imagine', 'Classic', 'The Beatles')
let Lowkey = new Song('Lowkey', 'R&B', 'Niki')
console.log(Memories, Imagine, Lowkey)