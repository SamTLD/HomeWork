//SYNCHRONOUS APPROACH

const {readFileSync,writeFileSync}= require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync(
    './content/result_sync.txt',
    `Result: ${first}, ${second}`,
    {flag:'a'}
)

console.log('completed')
console.log('startin the next')

