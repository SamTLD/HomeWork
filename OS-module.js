const os = require('os')
console.log(os)

const user = os.userInfo()
console.log(user)

const time = os.uptime()
console.log(time)

console.log(`them system uptime is : ${os.uptime()} seconds`)

const info={
name : os.hostname(),
relese : os.release(),
tatleMomory : os.totalmem(),
freeSpace : os.freemem()
};

console.log(info);