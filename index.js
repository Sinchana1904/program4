const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello this is Git + Dockerfile");
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});