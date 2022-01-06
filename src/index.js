const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 2500
const userRouter = require('./Routers/user')
const taskRouter = require('./Routers/tasks')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port' + port)
})
