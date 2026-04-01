const express = require('express');//constructor
const cors = require("cors");//constructor
const objofpool = require("./config/pool")//imported the connection
const obj = express();//calling constructor

//use the permission 
obj.use(cors());
obj.use(express.json());

//creating End Points
//using GET method
//obj.get('interfacename',working)
obj.get("/getusers",async (objreq, objres) => {

    try {
        //receive data from postman body
        // const { name, password } = objreq.body;

        //select query where in pool
        const result = await objofpool.query("select * from users ");

        //send the response to postman
        //rows[0]--->single row
        objres.json(result.rows);
        console.log("result==",result.rows);
    } 
    catch (err) {
        console.log(err);
        objres.json({ error: "server error" });
    }
});


//using Post Method
obj.post("/saveusers", async (objreq, objres) => {
    try {

        //receive data from postman body
        const { name, password } = objreq.body;

        //insert query where in pool
        const result = await objofpool.query("insert into users(name,password) values($1,$2) returning * ", [name, password]);

        //send the response to postman
        objres.json(result.rows[0]);

    }
    catch (err) {
        console.log(err);
        objres.json({ error: "server error" });
    }



})

obj.listen(5000, () => {
    console.log("server is listening at 5000 port");
})