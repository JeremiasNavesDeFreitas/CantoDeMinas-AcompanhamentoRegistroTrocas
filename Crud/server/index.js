const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Info@123",
    database: "crudproduto",
})

/*
app.get('/', (req, res) => {
    res.send("Hello World!!");
});*/

app.use(cors());
app.use(express.json());

/*
app.get("/", (req, res) => {

    let BCO = "INSERT INTO produtos (name, cost, category) VALUES ('Parmesão Cto Minas 350 g', '21', 'Queijo')";

    db.query(BCO, (err, result) => {
        console.log(err);
    });

});*/

app.post("/register", (req, res) => {
   const {name} = req.body;
   const {cost} = req.body;
   const {category} = req.body;

   //console.log(name);

   let BCO = "INSERT INTO produtos (name, cost, category ) VALUES (?,?,?)";

   db.query(BCO, [name, cost, category], (err, result) => {
        console.log(err);
   })
    
});

app.get("/getCards", (req, res) => {

    let BCO = "SELECT * from produtos";

    db.query(BCO, (err, result) => {
        if (err) console.log(err);
        else res.send(result);

    });
});

//app.delete

app.listen(3001, () => {
    console.log("Rodando Servidor");

});