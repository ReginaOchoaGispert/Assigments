const express = require("express"); //get the modle into the screen, its the input
const app = express(); //with this 2 lines we have a server
app.engine("ejs", require("ejs").renderFile); //11.2k (gzipped: 4.2k)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //inside of public we can add everything we want
app.set("view engine", "ejs");

app.get("/",(req, res) =>{ // /url/npoint //ipoint is a url adress //to configurate it:
    //res.send("Hello world");
    //res.sendFile(__dirname + "/public/html/index.html"); //dirname: refers to the current location of the file
    res.render("home");
}); //(request=INPUT an object that contains all the info that I´m receiveing and response=OUTPUT no create new npoints)
app.get("/students",(req, res) =>{
    var name = req.query.name;
    /* res.send("Hello " + name);*/
    res.render("test", {name: name});
});
app.post("/students",(req, res) =>{
    var name = req.body.name;
    res.send("Hello secure " + name);
});
app.get("/teachers/:name",(req, res) =>{
    res.send("Hello Prof. " + req.params.name);
});

app.listen(3000,(err) => {
    console.log("Listening on port 3000")
})//which is the port this server is listening to