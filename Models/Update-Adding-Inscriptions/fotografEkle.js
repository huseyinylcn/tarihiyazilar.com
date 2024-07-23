const sql =require('mssql')


const fotografEklemeF = (users,path) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resolvt = await sql.query`insert into [QR].[dbo].[fotgraflar]([user],[img],[dates]) values(${users},${path},GETDATE())`;

            resolve(resolvt.recordset);
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {fotografEklemeF}