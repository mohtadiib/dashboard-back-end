import oracledb from "oracledb"
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const urlDB = "192.168.0.14:1521/hq19"
const localUrlDB = "localhost/moh"

const connection = await oracledb.getConnection({
    user : "mhb",
    password : "mhb",
    connectionString : localUrlDB
    // user : "mhb",
    // password : "mhb",
    // connectionString : "localhost/moh"
});

export default connection

