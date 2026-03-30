const { Pool } = require("pg");

//information of database
//in json format

const dbinfo = {
    user: "postgres",
    host: "localhost",
    database: "ecommerce",
    password: "admin123",
    port: 5432
}
//giving db info to client
const objofpool=new Pool(dbinfo);

objofpool.connect()
                  .then(   ()=>  { console.log("Connected To Database") }   )
                  .catch( (err)=>{ console.error("Connection Error",err)} )

module.exports=objofpool                  