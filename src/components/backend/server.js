const express = require('express')
const cors = require('cors')
const app = express()
app.use(
  cors({
    origin: 'http://localhost:5174'
  })
)
app.get('/', (req, res) => {
    res.json({message: "Cors issue resolved"})
})

const port = 8000;
app.listen(port, () => console.log(`Server started pn ${port}`))