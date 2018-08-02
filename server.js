var express = require("express");

var DepLinker = require('dep-linker');
DepLinker.copyDependenciesTo('./public/Scripts');

var app = express();
var port = process.env.PORT || 8080;

app.use(require('less-middleware')({ src: __dirname + '/public' }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {});