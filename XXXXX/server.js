const http = require("http");
const port = 3000; //the server is going to be made available at 3000.

const server = http.createServer(function(req,res){
    res.end("This is my first Node Server");
}); // this aceepts a callback

server.listen(port,function(){
    console.log(`Server started at ${port}`);
});

//we can use nodemon to restart the server whenever a change is made.


