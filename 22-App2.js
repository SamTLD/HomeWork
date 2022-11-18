/*const http = require('http')

//using Events emiter API
const server = http.createServer()

//emit request event
//subscribe/listen/respond
server.on('request',(req,res)=>{
    res.end('welcome')
})

server.listen(5001)

var http = require('http')
var fs = require('fs')


const server = http.createServer((req,res)=>{
    const largeText = fs.readFileSync('./content/100000.txt', 'utf8')
    res.end(largeText);
})
http.createServer(function(req,res){
    const largeText = fs.readFileSync('./content/100000.txt', 'utf8')
    res.end(file);
})

http.createServer(function(req,res){
    const fileStream= fs.createReadStream('./content/100000.txt', 'utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

.listen(5000)*/

/*REST API =  representational state transfre => Arkitechture

http = hypertext transfer protocal =>protocal

json = javascript object Notation=> representas the structure of data

api application programing interface => DEFIEND way of communication*/

