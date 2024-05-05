const express = require("express");
const app = express();

const path = require("path");
const srcPath = path.join(__dirname, "src");
const login = path.join(__dirname, "src", "login.html");
console.log(srcPath);

app.use(express.static(srcPath));
app.get("/", (req, res) => {
    res.send("index root");
});
app.get("/login", (req, res) => {
    //   res.send("login root");
    res.sendFile(login);
});

// app.use(express.static("src"));
app.listen(4000, () => {
    console.log("Server is Started");
});
