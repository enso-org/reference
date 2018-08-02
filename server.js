var express = require("express");
var lessMiddleware = require('less-middleware');

var DepLinker = require('dep-linker');
DepLinker.copyDependenciesTo('./public/Scripts');

var app = express();
var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(lessMiddleware(__dirname + "/public/styles"));

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {});