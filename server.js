const express= require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
server = app.listen(port,() => console.log(`Listening on port ${port}`));


app.use(express.json(), express.urlencoded({extended:true}));
require("./server/config/database.config");
require("./server/routes/jokes.routes")(app);