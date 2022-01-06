const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate (value){
            if (!validator.isLength(value, {min:6, max:undefined})){
                throw new Error('The password must include at least 6 charactors!')        
            }
            if (value == 'password'){
                throw new Error('The password connot be "password"!')
            }


        }
        
            

    }
    ,
    age:{
        type:Number,
        validate(value) {
            if (value < 0){
                throw new Error('Age must be a positive number!')
            }
        }
    
    },
    email:{
        type:String,
        required: true,
        unique:true,
        vdlidate (value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        },
        lowercase: true
    }
})

module.exports = User