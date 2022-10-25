const express = require("express"); //get the modle into the screen, its the input
const app = express(); //with this 2 lines we have a server
const https = require("https");

app.engine("ejs", require("ejs").renderFile); //11.2k (gzipped: 4.2k)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //inside of public we can add everything we want
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var characters = [];
    for(let i=0; i<6; i++){
        characters.push({
            image: "./images/GoThrones.jpg",
            name: "Character " + i,
            link: "#"
        });
    }
    res.render("home",{ characters: characters });
});

app.listen(3000,(err) => {
    console.log("Listening on port 3000")
});