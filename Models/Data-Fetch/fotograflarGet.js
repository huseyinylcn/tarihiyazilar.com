const sql =require('mssql')


const fotografGetF = (user)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * FROM [QR].[dbo].[fotgraflar] where [user] = ${user}`
        resolve(resolvt.recordset)
    })
}

module.exports = {fotografGetF}