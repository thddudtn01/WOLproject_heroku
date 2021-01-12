const express = require("express");
const app = express();
const PORT = process.env.PORT
var com = 0;
app.get("/", (req, res) => {
res.send({ return: com });
com = 0;
});
app.get("/1/", (req, res) => {
res.send({ return: "good" });
com = 1;
});
app.listen(PORT);