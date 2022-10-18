const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const https = require("https");
const apiKey = "";
const list_id = "c893142775";
const url = "https://us9.api.mailchimp.com/3.0/lists/"+list_id;
const options = {
    method: "POST",
    auth: "0244214@up.edu.mx:" + apiKey
};

app.get("/",(req, res) =>{ 
    res.sendFile(__dirname + "/public/html/signup.html"); //dirname: refers to the current location of the file
});

app.post("/registry",(req, res) =>{
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            }
        }]
    };
    var mailRequest = https.request(url, options, (response) => {
        if(response.statusCode === 200) {
            response.on("data", (data) => {
                var jsonResp = JSON.parse(data);
                if(jsonResp["error_count"] === 0) {
                    res.sendFile(__dirname +"/public/html/success.html");
                } else {
                    res.sendFile(__dirname +"/public/html/failure.html");
                    console.log(jsonResp.errors[0]["error_code"]);
                    console.log(jsonResp.errors[0]["error"]);
                }
            }).on("error", (e) => {
                res.sendFile(__dirname +"/public/html/failure.html");
            });
        } else {
            res.sendFile(__dirname +"/public/html/failure.html");
        }
    });
    var jsonData = JSON.stringify(data);
    mailRequest.write(jsonData);
    mailRequest.end();
});

app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});