//here the apiData function 

const { default: axios } = require("axios");
require('dotenv').config();
const apiUrl=process.env.API_URL

const apiData=(req,res)=>{
axios.get(`${apiUrl}`).then(response=>{
    res.send(response.data)
}).catch(error=>res.send(error.message))
}

module.exports=apiData