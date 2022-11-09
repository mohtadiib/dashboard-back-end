import usersRouter from "./routes/index.js"
import express from "express";
import {allowCrossDomain} from "./config/config_header.js";
import connection from "./config/database.js";

// const app = express()
// app.use(allowCrossDomain);
//
// app.use(express.json())
// app.use('/users',usersRouter)
async function fetch(){
    try {
        const sqlQuery = `SELECT * FROM USERS`;
        const data = await connection.execute(sqlQuery);
        console.log(data.rows);
        // res.send(data.rows)
    }catch (err){
        console.error("error is: ",err)
        // res.send("fetch data is error")
    }
}
fetch()

async function create(){
    try {
        const sqlQuery = `INSERT INTO USERS (ID, NAME, PHONE) VALUES (:1, :2,:3)`;
        const binds = [14,"rtt","09123"];
        // const binds = [req.body["ID"], req.body["NAME"], req.body["PHONE"]];
        const result = await connection.execute(sqlQuery, binds, {
            autoCommit:true
        });
        console.log("Number of inserted rows:", result.rowsAffected);
        // res.send("success")
    }catch (err){
        console.error("error is: ",err)
        // res.send("fetch data is error")
    }
}
// create()
// app.listen(5000,()=>console.log("Server running at port 5000"))
