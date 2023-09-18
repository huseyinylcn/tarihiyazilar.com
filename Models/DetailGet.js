const sql =require('mssql')


const DetailGetF = (city,town,id)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select qrimgpath,mezarimgpath,esertitle,esertarnslate,eserhakkinda from mezarInfo where city = ${String(city)} and town =  ${String(town)} and id =  ${String(id)} and  active = 1`
        resolve(resolvt.recordset[0])
    })
}

module.exports = {DetailGetF}