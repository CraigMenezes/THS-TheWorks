const http = require("http");
const fs = require("fs");
const port = 9000;

const server = http.createServer(function (req, res) {
    let ababab = req.url
    console.log(ababab)

    if (ababab == "/" || ababab == "/home") {
        fs.readFile("html/index.html",null,function(err,html){
            if(err){
                res.writeHead(404);
                res.write("Sorry you have landed on the wrong page!");
            }
            else{
                res.write(html);
            }
            res.end();
        });
    }
    else if (ababab == "/about") {
        fs.readFile("html/about.html",null,function(err,html){
            if(err){
                res.writeHead(404);
                res.write("Sweet Home Alabama!");
            }
            else{
                res.write(html);
            }
            res.end();
        });
    }
    else if (ababab == "/contact") {
        fs.readFile("html/contact.html",null,function(err,html){
            if(err){
                res.writeHead(404);
                res.write("Sweet Child O Mine!");
            }
            else{
                res.write(html);
            }
            res.end();
        });
    }
    else if (ababab == "/score") {
        fs.readFile("html/score.html",null,function(err,html){
            if(err){
                res.writeHead(404);
                res.write("Somebody's Me!");
            }
            else{
                res.write(html);
            }
            res.end();
        });
    }
    else if (ababab == "/pick") {
        fs.readFile("html/pick.html",null,function(err,html){
            if(err){
                res.writeHead(404);
                res.write("SummerTime!");
            }
            else{
                res.write(html);
            }
            res.end();
        });
    }
    else {
        res.write("buhbye");
        res.end();
    }
});


server.listen(port, function () {
    console.log(`Server started at ${port}`);
});