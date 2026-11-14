const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello after push ");
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});
