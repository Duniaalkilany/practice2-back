//functions for crud endpoints 
//here i will use the model cause i need it in crud functions
const DigimonModel=require('../models/mongoose.model')

//create fav post 
const createFav =(req,res)=>{
    const{name,img,level}=req.body
    DigimonModel.find({name:name},(error,data)=>{
        if(data.length>0){
            res.send('already exist')
        }else{
          const newDigimonModel = new DigimonModel({
              name:name,
              img:img,
              level:level
          })
          newDigimonModel.save() 
          res.send(newDigimonModel)
        }
    }
   
    )
};



/*====================================get(read)Fav=======================================================*/

const getFav=(req,res)=>{
    DigimonModel.find({},(error,data)=>{
        if(error)
        
        {
            res.send(error.message)
        }else{
            res.send(data)
        }

    }) 
}


/*===============================================delete==================================================*/

const deleteFav=(req,res)=>{
const name=req.params.name
DigimonModel.deleteOne({name:name},(error,data)=>{
    if(error){
        res.send(error.message)
    }else{
        res.send(data)
    }
})}

/*===============================================update====================================================*/

const updateFav=(req,res)=>{
    const choosenName=req.params.name
    const {name,img,level}=req.body
    DigimonModel.findOne({name: choosenName},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            data.name=name;
            data.img=img;
            data.level=level;
            data.save();
            res.send(data)
        }
    } )
}



module.exports={
    createFav,getFav,deleteFav,updateFav
}