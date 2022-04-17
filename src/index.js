const express=require('express')
require('./db/mongoose')

const User=require('./models/user')

const app=express()


app.use(express.json())

app.post('/users',(req,res)=>{


    const user= new User(req.body)

    user.save().
    then(
        ()=>{
res.send(user)
        }
    ).catch((e)=>{
        res.status(400).send(e)
    })

})
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is up on Port ${port}`);
})