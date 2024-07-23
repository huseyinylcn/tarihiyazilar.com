const sql = require('mssql')

const HaberGuncellemeSQLF = (id, html, user, kapakfoto, baslik) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resolvt = await sql.query`UPDATE haberler 
                                            SET html = ${html}, 
                                                [user] = ${user}, 
                                                kapakfotograf = ${kapakfoto}, 
                                                baslik = ${baslik}, 
                                                dates = GETDATE() 
                                            WHERE id = ${id}`;

            resolve(resolvt.recordset);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { HaberGuncellemeSQLF };
