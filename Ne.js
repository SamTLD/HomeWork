/*const {readFile} = require('fs')

console.log('First task')

readFile('./HomeWork/content/second.txt','utf8', (err,result) => {
    if (err) {
        console.log(err)
    return
    }
    console.log(result)
    console.log('Compleated task one')
})

console.log('Next task')

console.log('first')
setInterval(() => {
    console.log('second')
}, 2000);

console.log('third')

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('First')
    res.end('Hi All')
})

server.listen(5000,()=>{
    console.log('Hi')
})

const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('Welcome to our first web page')
        return
    }
    if (req.url==='/about') {
        for (let i= 0; i< 100; i++) {
            for (let j = 0; j < array.length; j++) {
                console.log(`${i},${j}`)
                
            }
            
        }
        res.end('Hellow')
        return
}})

server.listen(5000,()=>{
    console.log('Hi')
})*/

const {readFile,writeFile}=require('fs')
const { start } = require('repl')

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

/*const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
getText('./HomeWork/content/first.txt')
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))*/

const Start = async ()=>{
    try{
        const first = await readFilePromise('./HomeWork/content/first.txt','utf8')
        const second = await readFilePromise('./HomeWork/content/second.txt','utf8')
        await writeFilePromise('./HomeWork/content/result_await.txt',`Write : ${first}, ${second}`)
        console.log(first)
        console.log(second)
    }catch(error){
        console.log(error)
    }
    
}
start()