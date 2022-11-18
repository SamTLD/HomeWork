const http = require('http')
const {readFileSync}= require('fs')

const HomePage= readFileSync('./NavBar-task/navbar-app/Index.html')
const server = http.createServer((req,res)=>{
    //console.log('User hit the server') developer.mozilla.org
            const url=req.url
        if(url==='/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(HomePage)
            res.end()
        }
        else if(url==='/about'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>About Page</h>')
            res.end()
        }
        else {
            res.writeHead({'content-type':'text/html'})
            res.write('<h1>Page Not Found</h>')
            res.end()
        }
    
})
server.listen(5000)