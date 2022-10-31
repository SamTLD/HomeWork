const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('Welcome')
    }
    if (req.url==='/about'){
        res.end('About')
    }
    res.end(`
        <h1>Opps!</h1>
        <p>Sorry we can not find what you looking for</p>
        <a herf="/">Go back</a>
        `
    )
})

server.listen(5000)