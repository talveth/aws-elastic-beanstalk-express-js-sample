const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.sendFile("frontpage.html", {root: __dirname}));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
