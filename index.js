import usersRouter from "./routes/index.js"
import express from "express";
import {allowCrossDomain} from "./config/config_header.js";

const app = express()
app.use(allowCrossDomain);

app.use(express.json())
app.use('/',usersRouter)
//start server
app.listen(4000,()=>console.log("Server running at port 4000"))
