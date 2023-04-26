var input = process.argv.slice(-1)[0].split("/");
//var input = require('child_process').spawn('pbpaste');

var target = input.indexOf("dp") + 1;

var output = "https://www.amazon.co.jp/dp/" + input[target];
console.log(output);

var copy2clipboard = require('child_process').spawn('pbcopy'); 
copy2clipboard.stdin.write(output);
copy2clipboard.stdin.end();