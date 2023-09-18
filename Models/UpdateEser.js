const sql =require('mssql')


const UpdateEserF = (city,town,adress,mezarimgpath,esertitle,esertranslate,eserhakkinda,active,id)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query`select * from  mezarInfo

        UPDATE mezarInfo
        SET city = ${city}, town = ${town}, adress = ${adress}, dates = getdate(), mezarimgpath= ${mezarimgpath}, esertitle= ${esertitle}, esertarnslate= ${esertranslate}, eserhakkinda = ${eserhakkinda}, active = ${Number(active)}
        WHERE id = ${id};`
        
    })
}

module.exports = {UpdateEserF}