const express = require('express');
const app = express();

app.get('/add', function (req, res) {
  res.send(String(Number(req.query.a) + Number(req.query.b)));
});
app.get('/subtract', function (req, res) {
    res.send(String(Number(req.query.a) - Number(req.query.b)));
});

app.listen(8080);
module.exports.app = app.listen(8080);