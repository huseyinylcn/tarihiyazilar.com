const sql =require('mssql')


const ListeGetF = ()=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select esertitle,city,town,id,adress from mezarInfo where active = 1`
        resolve(resolvt.recordset)
    })
}

module.exports = {ListeGetF}