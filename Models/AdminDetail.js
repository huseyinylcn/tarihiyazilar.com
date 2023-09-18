const sql =require('mssql')


const AdminDetailGet = (city,town,id)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from mezarInfo where city = ${String(city)} and town =  ${String(town)} and id =  ${String(id)}`
        resolve(resolvt.recordset[0])
    })
}

module.exports = {AdminDetailGet}