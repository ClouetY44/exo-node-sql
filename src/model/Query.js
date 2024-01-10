import pool from "../config/db.js"

class Query {
    static async run(query){
        const result = await pool.execute(query)
        return result
    }
}

export default Query