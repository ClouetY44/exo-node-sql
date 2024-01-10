import mysql from "mysql2/promise";


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    // rajouter le PORT (MAC)
    // les différentes option vues en cours
});

pool.getConnection().then((connection)=>{
    console.log(`Connected to : ${connection.config.database}`);
    connection.release();
})

export default pool;