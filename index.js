const express = require("express")
const app = express()
const cors = require('cors')
const port = 5002
const getStudents = require("./routes/students")

app.use(cors())

app.use(express.json())

app.use('/students', getStudents)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})