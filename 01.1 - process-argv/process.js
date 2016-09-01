// print process.argv
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

//$ node process.js one two=three four
//0: node
//1: /Users/mjr/work/node/process-2.js
//2: one
//3: two=three
//4: four