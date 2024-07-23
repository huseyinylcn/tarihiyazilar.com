const sql =require('mssql')


const hbrallgetF = (users)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from haberler where  [user] = ${users} ORDER BY dates DESC  ;`
        resolve(resolvt.recordset)
    })
}

module.exports = {hbrallgetF}