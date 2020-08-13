const axios = require('axios')
const inquirer = require('inquirer')

inquirer
    .prompt([{
        type: 'input',
        name: 'movie',
        message: 'What is your favorite movie?'
    }
    ])
    .then(answer => {
        console.log(`Your favorite movie is ${answer.movie}`)
        axios.get(`http://www.omdbapi.com/?apikey=9503de53&t=${answer.movie}`)
            .then(movie => {
                console.log(movie.data.Title)
                console.log(movie.data.Director)
                console.log(movie.data.Plot)
            })
            .catch(err => { console.log(err)})
    })
    .catch(err => { console.log(err)})