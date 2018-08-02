var express = require("express");
import { Compiler } from 'express-compile';

var DepLinker = require('dep-linker');
DepLinker.copyDependenciesTo('./public/Scripts');

var app = express();
var port = process.env.PORT || 8080;
app.use(Compiler({
    root: '.',
    cwd: 'public',
    paths: ['public/**/*'],
    ignore: ['node_modules/**/*'],
    ignoreStyleCache: true
}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {});