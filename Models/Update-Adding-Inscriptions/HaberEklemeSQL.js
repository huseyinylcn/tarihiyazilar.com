


const sql =require('mssql')


const HaberEklemeSQLF = (id, html, user, kapakfoto, baslik) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resolvt = await sql.query`INSERT INTO haberler (id, html, [user], kapakfotograf, baslik, dates) 
                VALUES (${id}, ${html},${user}, ${kapakfoto}, ${baslik}, GETDATE())`;

            resolve(resolvt.recordset);
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {HaberEklemeSQLF}