// var http = require('http');
// var dt = require('./myFirstmodule');

// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write('The Date and Time are currently: ' + dt.myDatetime());
//     res.end();
// }).listen(8080);
// var http = require('http');
var http = require ('http')
var fs = require('fs');

// http.createServer(function(req, res){
//     fs.readFile('index.html', function(err, data){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         return res.end()
//     });
// }).listen(8080);
// http.createServer(function(req, res){
//     fs.appendFile('myNew.html', "Hello just added my first file from Node js", function (err){
//         if (err) throw err;
//         console.log('saved')
//     });
// }).listen(8080)

// fs.appendFile('myNew.html','Check on the Updates', (err) =>{
//     if (err) throw err;
//     console.log('Updated sucessfuly');
// })
// http.createServer(function(req, res){
//     fs.readFile('myNew.html', (err,data)=>{
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080)
fs.unlink('toDelete.html', (err) =>{
    if (err) throw err;
    console.log("Sucessfully deleted")
});