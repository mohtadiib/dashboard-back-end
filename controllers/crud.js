import connection from "../config/database.js";

class Crud{

    constructor(table){this.table = table}

    getAllData = async (req,res) => {
        try {
            const sqlQuery = `SELECT * FROM ${this.table}`;
            const data = await connection.execute(sqlQuery);
            console.log(data.rows);
            res.send(data.rows)
        }catch (err){
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }

    getDataById = async (req,res) => {
        try {

            const sqlQuery = `select * from AL_ALKHARE where ID = :1`;

            const binds = [req.params.id];
            const data = await connection.execute(sqlQuery, binds);
            console.log(data.rows);
            res.send(data.rows)

        }catch (err){
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }

    createData = async (req,res) => {
        try {
            const sqlQuery = `INSERT INTO AL_ALKHARE (ID, NAME, PHONE) VALUES (:1, :2,:3)`;
            const binds = [req.body["ID"], req.body["NAME"], req.body["PHONE"]];
            const result = await connection.execute(sqlQuery, binds, {
                autoCommit:true
            });
            console.log("Number of inserted rows:", result.rowsAffected);
            res.send("Done")
        }catch (err){
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }

    updateData= async (req,res) => {
        try {
            console.log(req.body)
            console.log(req.params.id)

            const sqlQuery = `UPDATE AL_ALKHARE SET  NAME = :1 , PHONE = :2 WHERE ID = :3`;
            const binds = [ req.body["NAME"], req.body["PHONE"],req.params.id];
            const result = await connection.execute(sqlQuery, binds, {
                autoCommit:true
            });
            console.log("Number of inserted rows:", result.rowsAffected);
            res.send("success")
        }catch (err){
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }

    deleteData = async (req,res) => {
        try {
            const sqlQuery = `DELETE FROM AL_ALKHARE WHERE ID = :1`;
            const binds = [req.params.id];
            const result = await connection.execute(sqlQuery, binds, {
                autoCommit:true
            });
            console.log("Number of inserted rows:", result.rowsAffected);
            res.send("success")
        } catch (err) {
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }

    getCount = async (req,res) => {
        try {
            const sqlQuery = `SELECT conut FROM ${this.table}`;
            const data = await connection.execute(sqlQuery);
            console.log(data.rows);
            res.send(data.rows)
        }catch (err){
            console.error("error is: ",err)
            res.send("fetch data is error")
        }
    }
}
export default Crud;