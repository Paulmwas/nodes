// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
// var q= url.parse(adr, true);
// console.log(q.pathname);
// console.log(q.host);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata.month);
// var url = require('url');
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     var q = url.parse(req.url, true);
//     var fileName= '.'+q.pathname;
//     fs.readFile(fileName, (err, data)=>{
//         if(err){
//             res.writeHead(404, {'Content-Tpe':'text/html'});
//             return res.end("404 Not Found")
//         }
//         res.writeHead(200, {'Content-Type':'text/html'});   
//         res.write(data);
//         return res.end();
//         });
//     }).listen(8080);
var upperCase = require("upper-case");
var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(upperCase.upp)
})