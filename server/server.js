const path = require('path');
const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '/../public/');

console.log(__dirname + '/../public/');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})