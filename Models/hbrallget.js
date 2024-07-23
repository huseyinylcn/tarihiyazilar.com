const sql =require('mssql')


const hbrallgetF = ()=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query(`select * from haberler ORDER BY dates DESC;`)
        resolve(resolvt.recordset)
    })
}

module.exports = {hbrallgetF}