/* This is a Node.js server-side code that creates an API for a CRUD (Create, Read, Update, Delete)
application for a product database. It uses the Express framework to handle HTTP requests and
responses, the MySQL module to connect to a MySQL database, and the CORS module to enable
cross-origin resource sharing. */
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

/* `const db = mysql.createPool({...})` creates a connection pool to a MySQL database. The object
passed as an argument contains the configuration options for the connection, including the host,
user, password, and database name. The connection pool allows for multiple connections to be created
and reused, improving the performance and scalability of the application. */
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


/* `app.use(cors())` enables Cross-Origin Resource Sharing (CORS) for the API, allowing it to be
accessed by clients from different domains. This is necessary because by default, web browsers
restrict cross-origin HTTP requests initiated from scripts for security reasons. */
app.use(cors());
app.use(express.json());

/*
app.get("/", (req, res) => {

    let BCO = "INSERT INTO produtos (name, cost, category) VALUES ('Parmesão Cto Minas 350 g', '21', 'Queijo')";

    db.query(BCO, (err, result) => {
        console.log(err);
    });

});*/

/* This code block is creating a route for handling HTTP POST requests to register a new product in the
database. It extracts the product name, cost, and category from the request body using destructuring
assignment. It then constructs a SQL query to insert the product data into the "produtos" table in
the database using the extracted values. The query is executed using the connection pool's `query()`
method, and the result is sent back to the client as a response. */
app.post("/register", (req, res) => {
   const {name} = req.body;
   const {cost} = req.body;
   const {category} = req.body;

   //console.log(name);

   let BCO = "INSERT INTO produtos (name, cost, category ) VALUES (?,?,?)";

   db.query(BCO, [name, cost, category], (err, result) => {
        //if(err) console.log(err);
        //else res.send(result);
        res.send(result);
   });
    
});

/* This code block is creating a route for handling HTTP POST requests to search for products in the
database. It extracts the product name, cost, and category from the request body using destructuring
assignment. It then constructs a SQL query to select all products from the "produtos" table in the
database that match the extracted values for name, cost, and category. The query is executed using
the connection pool's `query()` method, and the result is sent back to the client as a response. */
app.post("/search", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
  
    let BCO = "SELECT * from produtos WHERE name = ? AND cost = ? AND category = ?";
    db.query(BCO, [name, cost, category], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

/* This code block is creating a route for handling HTTP GET requests to retrieve all the products from
the "produtos" table in the database. It constructs a SQL query to select all products from the
table and executes it using the connection pool's `query()` method. The result is sent back to the
client as a response. The route is accessed using the URL path "/getCards". */
app.get("/getCards", (req, res) => {

    let BCO = "SELECT * from produtos";

    db.query(BCO, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        } 

    });
});

//app.delete

/* This code block is creating a route for handling HTTP PUT requests to update a product in the
database. It extracts the product id, name, cost, and category from the request body using
destructuring assignment. It then constructs a SQL query to update the product data in the
"produtos" table in the database using the extracted values. The query is executed using the
connection pool's `query()` method, and the result is sent back to the client as a response. */
app.put("/edit", (req, res)=> {
    const {id} = req.body;
    const {name} = req.body;
    const {cost} = req.body;
    const {category} = req.body;

    let BCO = "UPDATE produtos SET name = ?, cost = ?, category = ? WHERE idprodutos = ?";

    db.query(BCO, [name, cost, category, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

});

/* This code block is creating a route for handling HTTP DELETE requests to delete a product from the
database. It uses the Express framework's `delete()` method to create the route, which takes in a
URL path "/delete/:id" with a parameter `id` representing the id of the product to be deleted. The
`req.params` object is used to extract the `id` parameter from the request URL. */
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let BCO = "DELETE FROM produtos WHERE idprodutos = ?";

    db.query(BCO, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        } 
    });
});


/* `app.listen(3001, () => { console.log("Rodando Servidor"); });` is starting the server and listening
for incoming requests on port 3001. When a request is received, the server will execute the
appropriate route handler function to handle the request and send a response back to the client. The
console.log statement is simply logging a message to the console indicating that the server is
running. */
app.listen(3001, () => {
    console.log("Rodando Servidor") ;

});