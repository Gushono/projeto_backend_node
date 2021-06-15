async function connect(){
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://root:password@localhost:3306/jogos_olimpicos");
  global.connection = connection;
  return connection;
}

async function selectEsportes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tb_esportes;');
    return rows;
}


async function insertEsporte(body){
    const conn = await connect();
    const sql = 'INSERT INTO tb_esportes(modalidade, tipo, distancia, sexo, local) VALUES (?, ?, ?, ?, ?);';
    const values = [body.modalidade, body.tipo, body.distancia, body.sexo, body.local];
    return await conn.query(sql, values);
}
 
module.exports = {selectEsportes, insertEsporte}