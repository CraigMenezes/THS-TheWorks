const http = require("http");
const port = 9000;

const server = http.createServer(function (req, res) {
    let ababab = req.url
    console.log(ababab)
    if (ababab == "/" || ababab == "/home") {
        res.write("hullo my name is hullo");
        res.end();
    }
    else if (ababab == "/about") {
        res.write("about turn lrl");
        res.end();
    }
    else if (ababab == "/contact") {
        res.write("contact me for a good time");
        res.end();
    }
    else if (ababab == "/score") {
        res.write("its 69-420");
        res.end();
    }
    else if (ababab == "/pick") {
        res.write("i love playing the guitar");
        res.end();
    }
    else {
        res.write("buhbye");
        res.end();
    }
});


server.listen(port, function () {
    console.log(`Server started at ${port}`);
});