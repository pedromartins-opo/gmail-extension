const express = require("express");

const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json([
        { id: 1, title: 'Template 01', message: "This is my first template!" },
        { id: 2, title: 'Template 02', message: "Second template: Hello everyone." },
        { id: 3, title: 'Template 03', message: "Another text template..." },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});