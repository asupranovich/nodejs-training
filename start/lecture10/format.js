var util = require('util');

var str = util.format("My %s %d %j", "string", 123, {a:5});

console.log(str);

