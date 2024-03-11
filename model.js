const mongoose=require('mongoose');

const TwitterPost=new mongoose.Schema({
    Profile:{
        type:String,
        trim:true
    },
    Post:{
        type:String,
        trim:true
    },
    Photo:{
        type:String,
        trim:true
    },
    Username:{
        type:String,
        trim:true,
    },
    Name:{
        type:String,
        trim:true,
    },
    Email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    }
},{
    timestamps:true
});


const post=new mongoose.model("TwitterPost",TwitterPost);


module.exports=post;