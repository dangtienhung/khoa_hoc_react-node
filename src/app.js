import express from 'express'

const app = express()

app.get('/ahihi', function (req, res) {
  console.log('first')
  console.log('first')
  res.send('Hello World')

})

app.listen(5000)