


const sql =require('mssql')


const userEklemeSQLF = (ad,soyad,sifre,mail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resolvt = await sql.query`INSERT INTO users (
                email
                ,passwords
                ,names
                ,surname) 
                VALUES (${mail}, ${sifre},${ad}, ${soyad} )`;

            resolve(resolvt.recordset);
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {userEklemeSQLF}