const {readFile,writeFile}=require('fs').promises
const { start } = require('repl')

/*const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)*/


const Start = async ()=>{
    try{
        const first = await readFile('./HomeWork/content/first.txt','utf8')
        const second = await readFile('./HomeWork/content/second.txt','utf8')
        await writeFile('./HomeWork/content/result_await_02.txt',`Bad : ${first}, ${second}`,{flag:'a'})
        console.log(first)
        console.log(second)
    }catch(error){
        console.log(error)
    }
    
}
start()