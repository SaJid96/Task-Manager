const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: 'Sajid',
//   age: 57,
// });

// me.save()
//   .then(() => console.log(me))
//   .catch((e) => {
//     console.log('Error!', e);
//   });


const Tasks=mongoose.model('Tasks',{
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
    },
})

const task=new Tasks({
    description:'ReactJS',
    completed:true,
})

task.save().then(()=>console.log(task)).catch((e) => {
    console.log('Error!', e);
  });