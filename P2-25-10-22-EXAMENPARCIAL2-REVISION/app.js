const express = require("express"); //get the modle into the screen, its the input
const app = express(); //with this 2 lines we have a server
const https = require("https");

app.engine("ejs", require("ejs").renderFile); //11.2k (gzipped: 4.2k)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //inside of public we can add everything we want
app.set("view engine", "ejs");

const allCharsApi = "https://thronesapi.com/api/v2/Characters"
var characters = [];
var currentPage = 0;

app.get("/", (req, res)=>{
    if(characters.length == 0) {
        https.get(allCharsApi,(response)=>{
            if(response.statusCode == 200){
                let respData = "";
                response
                .on("data", (data) => {
                    respData = data;
                })
                .on("end", (data) => {
                    var jsonResp = JSON.parse(respData);
                    console.log(jsonResp);
                    jsonResp.forEach((person) => {
                        characters.push({
                            id: person["id"],
                            firstName: person["firstName"],
                            lastName: person["lastName"],
                            name: person["fisrtName"] + " " + person["lastName"],
                            bornDate: "Unknown",
                            deadDate: "Unknown",
                            titles: person["title"],
                            aliases: [],
                            family: person["family"],
                            familyCrest: "./images/GoThrones.jpg",
                            image: person["imageUrl"],
                        });
                    });
                })
                .on("error", (data) => {
                    res.write("Error on process");
                    console.log("Error: {$e.message}");
                    res.send();
                });
            } else {
                res.write("Connection failed");
                res.send();
            }
        })
    }
    var indexStart = currentPage * 6;
    res.render("home",{ 
        characters: characters.slice(indexStart, indexStart + 6),
        page: currentPage,
    });
});

app.get("/page/:pageNum", (req, res) => {
    var reqPage = req.params.pageNum;
    currentPage = reqPage - 1;
    res.redirect("/");
});

app.get("/next", (req, res) => {
    currentPage++;
    res.redirect("/");
});

app.get("/previous", (req, res) => {
    currentPage--;
    res.redirect("/");
});

app.get("/detail/:charId", (req, res) => {
    res.render("detail");
});

app.listen(3000,(err) => {
    console.log("Listening on port 3000")
});