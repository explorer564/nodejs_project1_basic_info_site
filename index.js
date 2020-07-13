var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){

    var q = url.parse(req.url,true);
    var filename =(q.pathname =="/") ?  "./index.html":  "." + q.pathname + '.html' ;
 

    fs.readFile(filename, function (err,data){
        if (err){
            //todo: point to 404 file 
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.write(`<H1> 404 Error</H1> <br/> <a href='./''>Go back to home</a>`);
            return res.end();
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    
}).listen(8080);