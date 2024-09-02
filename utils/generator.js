var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 1,
  restore: "0"
});

generator.start();

module.exports = generator;