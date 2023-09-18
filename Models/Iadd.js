const sql =require('mssql')


const IaddF = (user)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from mezarInfo where  addname = ${user}`
        resolve(resolvt.recordset)
    })
}

module.exports = {IaddF}