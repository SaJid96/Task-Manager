const mongoose = require('mongoose');
const validator=require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number');
      }
    },
  },
});

const me = new User({
  name: 'colkcke',
  email:'kc',
  
});

me.save()
  .then(() => console.log(me))
  .catch((e) => {
    console.log('Error!', e);
  });


// const Tasks=mongoose.model('Tasks',{
//     description:{
//         type:String,
//     },
//     completed:{
//         type:Boolean,
//     },
// })

// const task=new Tasks({
//     description:'ReactJS',
//     completed:true,
// })

// task.save().then(()=>console.log(task)).catch((e) => {
//     console.log('Error!', e);
//   });