const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 8000


app.use((req, res, next) => {


    res.status(503).send('website under maintance,Check back soon!!!')

})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {

    const token = jwt.sign({ _id: 'abc123' }, 'thisismytest', { expiresIn: '7 days' })

    console.log("Token is === " + token);

    const data = jwt.verify(token, 'thisismytest')
    console.log('Data is === ' + data);

}

myFunction()