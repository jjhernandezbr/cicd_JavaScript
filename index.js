const Hello = require("./hello")
const express = require('express')
const app = express()

const hello = new Hello();
const PORT = 8080;
const HOST = '0.0.0.0';
app.get('/', (req, res) => {
    res.send(hello.helloWorld());
});
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});