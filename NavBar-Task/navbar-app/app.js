/*const http = require('http')
const {readFileSync}= require('fs')

const HomePage= readFileSync('./Index.html')
const HomePageJs= readFileSync('./Index.js')
const HomePageCss= readFileSync('./Css.css')
//const HomePageLogo= readFileSync('./logo.png')

const server = http.createServer((req,res)=>{
        const url=req.url
        console.log(url)

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
        else if(url==='/Css.css'){
            res.writeHead(200,{'content-type':'text/css'})
            res.write(HomePageCss)
            res.end()
        }
        else if(url==='/Index,js'){
            res.writeHead(200,{'content-type':'text/javascript'})
            res.write(HomePageJs)
            res.end()
        }
        
        else {
            res.writeHead({'content-type':'text/html'})
            res.write('<h1>Page Not Found</h>')
            res.end()
        }
    
})
server.listen(5000)*/

const express = require('express')
const path = require('path')


const app = express()
app.use(express.static('Public'))
/*app.get('/',(req,res)=>{
    res.send('Home Page')
})*/
/*app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Index.html'))
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})*/
/*app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not Found</h>')
})*/

app.listen(5000,()=>{
    console.log('sevre is listening on port 5000')
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen