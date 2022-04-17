const express=require('express')

const app=express()


app.use(express.json())

app.post('/users',(req,res)=>{
console.log(req.body);
    res.send('testing!!')
})
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is up on Port ${port}`);
})