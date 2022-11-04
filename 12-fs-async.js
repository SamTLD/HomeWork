const {readFile,writeFile} = require('fs')

/*const second = readFile('./content/second.txt','utf8')

console.log(second)*/
console.log('Start')
readFile('./HomeWork/content/second.txt','utf8', (err,result) => {
    if (err) {
        console.log(err)
    return
    }
    const second = result;

    readFile('./HomeWork/content/first.txt','utf8', (err,result) => {
        if (err) {
            console.log(err)
        return
        }
        const first = result;
    


writeFile (
    './HomeWork/content/result_async.txt',
    `Write : ${first}, ${second}`,
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Completed')
    }
    )
})
})
console.log('Startin the next')