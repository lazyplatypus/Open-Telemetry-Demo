const express = require('express')
const app = express()
const port = 3000

app.get('/movies', async function (req, res) {
  res.type('json')
  var delay = Math.floor( ( Math.random() * 2000 ) + 100);

  setTimeout((() => {
    res.send(({movies: [
      { name: 'Jaws', genre: 'Thriller'}, 
      { name: 'Annie', genre: 'Family'},
      { name: 'Jurassic Park', genre: 'Action'},
    ]}))
  }), delay)

})

app.listen( port, () => { console.log(`Listening at http://localhost:${port}`)})