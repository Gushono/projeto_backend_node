


const express = require("express");
const conexao = require('./conexao');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());



app.get("/esportes", (req, res) => {

    (async () => {
        console.log("Select * from tb_esportes...")
        const esportes = await conexao.selectEsportes();
        return res.json({ esportes: esportes});
        
    })();
});

app.post("/esportes", (req, res) => {

    (async () => {
        console.log('esse é o req: ', req.body);
        const esportes = await conexao.insertEsporte(req.body);
        console.log('Esporte inserido com sucesso!');
        return res.json({ esportes: req.body});
    })();

    
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


