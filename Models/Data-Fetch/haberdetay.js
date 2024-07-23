


const sql =require('mssql')


const hbrdetF = (users,id)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from haberler where  [user] = ${users}  and id = ${id} ORDER BY dates DESC  ;`
        resolve(resolvt.recordset[0])
    })
}

module.exports = {hbrdetF}