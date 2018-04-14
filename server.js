const express = require('express');
const app = express();



app.use(express.static('./'));

app.get('/', function (req, res) {
    res.sendFile(__dirname +"/main.html");
})

app.listen(3000, function () {
    console.log('listening on 3000')
})