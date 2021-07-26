const express=require('express');
const cors=require('cors');
const axios =require('axios')
const mongoose=require('mongoose');
const app =express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
const PORT=process.env.PORT
//connect mongoose 
mongoose.connect(`mongodb://duniaabd:1234@cluster0-shard-00-00.ozfv0.mongodb.net:27017,cluster0-shard-00-01.ozfv0.mongodb.net:27017,cluster0-shard-00-02.ozfv0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-10hzt2-shard-0&authSource=admin&retryWrites=true&w=majority`, {useNewUrlParser:true,useUnifiedTopology:true});




//require functions

const apiData=require('./controllers/apiData.controller')
const {createFav,getFav,deleteFav,updateFav}=require('./controllers/crud.controller')

//=======================================================endpoints================================================//

app.get('/',(req,res)=>{
    res.send('helllo from the back end')
});

//get data from api 
app.get('/apidata',apiData)
//crud operations  1.create fav 2. add to fav (read) 3. update fav 4.delete fav 

app.post('/favourite',createFav)
app.get('/favourite',getFav)
// /for delete and put you need uniqur params (here no id in the url data so use the name )
app.delete('/favourite/:name',deleteFav)
app.put('/favourite/:name',updateFav)



app.listen(PORT,()=>{
    console.log(`working on ${PORT}`);
})