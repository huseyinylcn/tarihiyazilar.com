


const sql =require('mssql')


const EserPushF = (city,town,adress,qrimgpath,mezarimgpath,addname,esertitle,esertarnslate,eserhakkinda,id,active)=>{
    return new Promise(async(resolve,reject)=>{
        let resolvt = await sql.query` insert into mezarInfo(city,town,adress,dates,qrimgpath,mezarimgpath,addname,esertitle,esertarnslate,eserhakkinda,id,active) 
        values(
            ${city},
        ${town},
        ${adress},
       
        getdate(),
        ${qrimgpath},
        ${mezarimgpath},
        ${addname},
        ${esertitle},
        ${esertarnslate},
        ${eserhakkinda},
        ${id},
        ${active}
        )`
        resolve(resolvt.recordset)
    })
}

module.exports = {EserPushF}