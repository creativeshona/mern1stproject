const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String, 
    },
    phoneNo:{
        type:Number,
    },
    profession:{
        type:String,
    },
    
    userName:{
        type:String,
    },
    password:{
        type:String,
    },
    cPassword:{
        type:String,
    }, 
    messages:[
        {
            name:{
                type:String,
            },
            email:{
                type:String, 
            },
            phoneNo:{
                type:Number,
            },
            message:{
                type:String,
            },  
        }
    ] ,

    
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
    
})


// Here are hasing the password

userSchema.pre('save',async function(next){
    console.log("hassing the password;");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cPassword = await bcrypt.hash(this.cPassword, 12);

    }
    next();
})

    // Generating the token ..............

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY) 
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch(err){
        console.log(err.meg)
    } 
}

userSchema.methods.addMessage = async function (name, email, phoneNo, message) {
    try {
        this.messages = this.messages.concat({ name, email, phoneNo, message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('User',userSchema)

module.exports = User;