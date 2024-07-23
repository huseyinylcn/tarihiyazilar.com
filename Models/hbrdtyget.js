const sql =require('mssql')


const hbrdtygetF = (id)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from haberler where id = ${id}`
        resolve(resolvt.recordset)
    })
}

module.exports = {hbrdtygetF}