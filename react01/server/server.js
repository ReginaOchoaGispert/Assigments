const express = require ("express");
const app = express();
const https = require("https");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const usersDB = [{
        userName: "admin",
        password: "admin123",
        name: "Web master",
        lname: "@ UP GDL",
        id: 01,
        profile: {
            accessDB: true,
            accessFE: true,
            modifyProfiles: true
        },
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Jack_Black_%2825446352520%29.jpg/1200px-Jack_Black_%2825446352520%29.jpg",
    },{
        userName: "profesorX",
        password: "IloveWolverine",
        name: "Charles",
        lname: "Xavier",
        id: 2,
        profile: {
            accessDB: true,
            accessFE: false,
            modifyProfiles: true
        },
        savedPurchases:[{
                hotel: "Sheraton",
                dateArrive: "02-25-2023",
                dateLeave: "02-29-2023",
        }, ],
        picture: "https://upload.wikimedia.org/wikipedia/en/0/00/Professor_Charles_%27X%27_Xavier.png",
    },
];

app.get("/login/:user/:pass", (req, res) => {
    const p_userName = req.params.user;
    const p_password = req.params.pass;
    console.log(p_userName + "/" + p_password);
    var user = usersDB.find((user) => {
        return user.userName === p_userName;
    });
    console.log(user);
    if(typeof user !== 'undefined') {
        if(user.password === p_password) {
            res.json(user);
        } else {
            res.json({
                error:"Unauthorized access", 
                message: "Wrong user+password combination",
            });
        }
    } else {
        res.json({
            error: "Unknown user",
            message: "User ir unknown",
        });
    }
});

app.post("/login", (req, res) => {
    const p_userName = req.body.user;
    const p_password = req.body.pass;
    console.log(p_userName + "/" + p_password);
    var user = usersDB.find((user) => {
        return user.userName === p_userName;
    });
    console.log(user);
    if(typeof user !== 'undefined') {
        if(user.password === p_password) {
            res.json(user);
        } else {
            res.json({
                error:"Unauthorized access", 
                message: "Wrong user+password combination",
            });
        }
    } else {
        res.json({
            error: "Unknown user",
            message: "User ir unknown",
        });
    }
});

app.listen(5000, () => {
    console.log("Example app listening on port 5000");
});