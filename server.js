var express = require("express")
var lunaLogo = require("luna-logo")

var app = express()
var port = process.env.PORT || 8080

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.get("/", function(req, res) {
    res.render("index")
})

app.listen(port, function() {})