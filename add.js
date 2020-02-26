#!/usr/bin/node
/*global process:true*/
/*global require:true*/
if(process.argv.length != 4){
  console.log('add x y');
  process.exit(1);
}

var x = Number(process.argv[2]),
    y = Number(process.argv[3]);

const sum = require('./calc.js');
console.log(`${x}+${y}=${sum(x,y)}`);


