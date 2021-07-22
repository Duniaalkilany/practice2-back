const mongoose=require('mongoose');
const Schema=mongoose.Schema

const DigimonSchema=new Schema ({
    name:{
        type:String,
    unique:true,
  lowercase:true,
  trim:true
},

    img:{
        type:String
    },
    level:{
        type:String
    }
});


//create model usin above schema
const  DigimonModel=mongoose.model('favdigimon',DigimonSchema)

//export model  
module.exports= DigimonModel