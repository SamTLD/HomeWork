/*const EventEmitter = require('events')

const testEmitter = new EventEmitter()

testEmitter.on('name',()=>{
    console.log(`Done`)
})

testEmitter.on('name',(fname,age)=>{
    console.log(`Done 02 ${fname} and :${age}`)
})

testEmitter.emit('name','Sam',57)

//streams
    //Writable
    //readable
    //Duplex
    //Transform

const {readFileSync,writeFileSync}= require('fs')

for(let i= 0;i<1000; i++){
    writeFileSync('./content/first.txt',`This is line:${i}\n`,{flag:'a'})
}

const {createReadStream}= require('fs')
const stream = createReadStream('./content/first.txt',{highWatermark:90000,encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})
stream('error',(err)=>console.log(err))
//defult 64kb
//last buffer - remainder
//highWatermark - controal size
//const stream = creatReadStream('./content/first.txt',{highWatermark:90000})
//const stream = creatReadStream('./content/first.txt',{encoding:'utf8'})*/

const {readFileSync,writeFileSync}= require('fs')

for(let i= 0;i<100000; i++){
    writeFileSync('./content/100000.txt',`This is line:${i}\n`,{flag:'a'})
}