const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// Optional version endpoint
app.get('/version', (req, res) => {
  res.send('1')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
