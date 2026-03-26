const express = require('express');//constructor
const cors = require("cors");//constructor

const obj = express();//calling constructor

//use the permission 
obj.use(cors());
obj.use(express.json());

//obj.get('interfacename',working)
obj.get("/getusers", (objreq,objres) => {
         objres.send("API is running");
});

obj.listen(5000,()=>{
    console.log("server is listening at 5000 port");
})