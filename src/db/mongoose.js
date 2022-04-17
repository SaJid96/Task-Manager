const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});




const Tasks=mongoose.model('Tasks',{
    description:{
        type:String,
        trim:true,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
})

const task=new Tasks({
    description:'ReactJS',
    
})
