//npm -global command, comes with node
//npm --vertion, npm --v

//local dependency -  use it only in your project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (store importent info abnout projct/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything is defolut)

//dev dependancy
//npm install --save-dev <packageName>
//npm install <packageName> --save-dev 

const name = require('lodash')
const items =[1,[2,[3,[4]]]]
const newItems = name.flattenDeep(items)

console.log(newItems)