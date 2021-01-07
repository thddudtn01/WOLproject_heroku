const express = require("express");
const app = express();
const PORT = process.env.PORT
app.get("/", (req, res) => {
res.send({ WOLproject: "good" });
});
app.listen(PORT);