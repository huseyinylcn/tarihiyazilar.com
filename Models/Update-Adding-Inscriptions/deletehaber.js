


const sql =require('mssql')


const HaberDeleteSQLF = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resolvt = await sql.query`delete from haberler where id = ${id}`;

            resolve(resolvt.recordset);
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {HaberDeleteSQLF}