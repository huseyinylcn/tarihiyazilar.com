const sql =require('mssql')


const UserControlF = (email,password)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from users where email = ${email} and  passwords  = ${password}`
        resolve(resolvt.recordset)
    })
}

module.exports = {UserControlF}