const bodyParser = require("body-parser");
const express = require ("express");
const cors = require ("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelieze.sync();


app.get("/", (req, res) => { 
    res.json({message : "Server CRUD berjalan."}); 
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





