{
  "dependencies": {
    "express": "^4.18.1"
  }
}
pcarlo@pcarlo-a01 cpu-nodejs-api % cat express1.js 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express and CPu!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
