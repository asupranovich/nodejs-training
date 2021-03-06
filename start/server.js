var log = require("logger")(module);

var db = require("db");
db.connect();

var User = require('./user');

function run() {
    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);

    log(db.getPhrase("Load successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}