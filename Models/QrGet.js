const sql =require('mssql')


const QrGetF = ()=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from mezarInfo where active = 0`
        resolve(resolvt.recordset)
    })
}

module.exports = {QrGetF}