const path = require('path')
console.log(path.sep)

const filePath = path.join('content','subfolder','abc.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(filePath)
console.log(absolute)

const abssolut = path.resolve(__dirname,'content','subfolder','abc.txt')
console.log(abssolut)

console.log(path.resolve(__dirname,'content','subfolder','abc.txt'))