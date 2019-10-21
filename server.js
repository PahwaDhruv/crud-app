const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path=require("path");

const users = require("./routes/api/users");

const app = express();

//BodyParser Middleware

app.use(bodyParser.json());

//DB Config

const db =require("./config/keys").mongoURL;

mongoose.connect(db)
    .then(() => console.log("Connected"))
    .catch(error => console.log(error));

//Use Routes
app.use('/api/users', users);

//Serve static assets if in Production
if(process.env.NODE_ENV === 'production'){
    //Set Static Folder
        app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"client","build", "index.html"));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));