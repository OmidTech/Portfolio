const express=require('express');


const app=express();
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("index")
    
})
app.get("/aboutme", function (req, res) {
    res.render("Aboutme")
    
})
app.get("/projects", function (req, res) {
    res.render("projects")
    
})
app.listen(3000, function (req, res) {
    console.log('server is started')
})