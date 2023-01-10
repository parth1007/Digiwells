const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectMongoDb = require("./config/db");
const app = express();
var cors = require('cors')
const fs = require('fs');
const multer = require('multer');

const upload = multer({dest:"./public"})
app.use(express.static('public'));


dotenv.config();
// connectMongoDb();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors()) ;

let data = fs.readFileSync('data.json');
data = JSON.parse(data);


app.post("/api/admin/upload-image", upload.single("logo"),(req,res) => {
    const file = req.file
    const fileExtention = file.mimetype.split("/")[1]
    const newFileName = "Logo." + fileExtention;
    data.logo = newFileName;
    fs.writeFileSync('data.json', JSON.stringify(data));

    fs.rename(`./public/${file.filename}`,`./public/${newFileName}`,function(){
        console.log("renamed");
    })
    res.status(200).send("200");
})


app.post("/api/admin/login", (req, res) => {
    try {
        const adminidreq = req.body.email;
        const adminpasswordreq = req.body.password; 

        if(adminidreq !== data.email){
            res.status(404).send("Wrong credentials1!");
        }
        else if(adminpasswordreq !== data?.password){
            console.log(adminpasswordreq,data?.password)
            res.status(404).send("Wrong credentials2!");
        }
        else{
            res.send("User Verified")
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
  });



app.get("/api/admin/fetchdata", (req, res) => {
        res.status(200).send(data);
});

app.get("/", (req, res) => {
        res.status(200).send(data);
  });

app.post("/api/admin/count-increment", (req, res) => {
    data.count = data.count + 1;
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.status(200).send(data);
});

app.post("/api/admin/update-heading", (req, res) => {
    const new_text = req.body.heading;
    data.heading = new_text;
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.status(200).send(data);
  });



app.listen(PORT, () => {
    console.log('Server listening on port 8000');
  });


