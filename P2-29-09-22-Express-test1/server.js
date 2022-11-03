const express = require("express"); //get the modle into the screen, its the input
const app = express(); //with this 2 lines we have a server
const https = require("https");
const mongoose = require("mongoose");

app.engine("ejs", require("ejs").renderFile); //11.2k (gzipped: 4.2k)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //inside of public we can add everything we want
app.set("view engine", "ejs");

const mongoUrl = "mongodb://localhost:27017/testDB";

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const carSchema = new mongoose.Schema({
    name: String, 
    model: Number, 
    comment: String,
});
const carModel = mongoose.model("Car", carSchema);

const welcomeMsg = "Welcome to my blog."
const longContent = "Lacus vel facilis volutpat est velit egestas dui id omare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit"

let posts = [];

app.get("/",(req, res) =>{ // /url/npoint //ipoint is a url adress //to configurate it:
    //res.send("Hello world");
    //res.sendFile(__dirname + "/public/html/index.html"); //dirname: refers to the current location of the file
    posts.push({
        title: "My entry blog", 
        content: longContent
    });
    res.render("home", { startingContent: welcomeMsg, posts: posts });
}); //(request=INPUT an object that contains all the info that I´m receiveing and response=OUTPUT no create new npoints)

app.get("/car", (req, res) =>{
    var carInst = new carModel({
        name: "Yaris",
        model: 2020,
        comment: "Great milage",
    });
    carInst.save();
});

app.get("/posts/:blogTitle", (req, res) => { //shows the content that I am clicking on
    res.render("post",{ post: posts[0] }); //post is the name of my template, parameters I need to show
});

app.get("/students",(req, res) =>{
    var name = req.query.name;
    /* res.send("Hello " + name);*/
    res.render("test", { name: name }); //Jason object=python dictionary with key and the value
});
app.post("/students",(req, res) =>{
    var name = req.body.name;
    res.send("Hello secure " + name);
});
app.get("/teachers/:name",(req, res) =>{
    res.send("Hello Prof. " + req.params.name);
});
const weatherKey = "69714dba4b57f2b2fa3e5c50900f58e2"
app.get("/weather",(req, res) =>{
    var link ="https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" +
    weatherKey;
    https.get(link, (response) => {
        response.on("data", (data)=>{
            var jsonData = JSON.parse(data); //jsonData.name
            //console.log("Welcome to " + jsonData["name"]);
            res.write("Welcome to " + jsonData.name);
            res.write("\nTemp: " + jsonData["main"]["temp"]);
            res.write("\nHumidity: " + jsonData["main"]["humidity"]);
            res.send();
        }).on("error",(e)=>{
            console.log("Error ${e.message}");
            res.send("Error ${e.message}")
        });
        //console.log(response);
    });
    //res.send("Data logged in console");
});

app.listen(3000,(err) => {
    console.log("Listening on port 3000")
})//which is the port this server is listening to