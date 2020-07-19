var fs = require("fs");
var path = require('path');
var CodeGen = require("swagger-typescript-codegen").CodeGen;

var file = "../../api/sample.json";
var swagger = JSON.parse(fs.readFileSync(path.join(__dirname, file), "UTF-8"));
var tsSourceCode = CodeGen.getTypescriptCode({
  className: "Test",
  swagger: swagger,
  imports: ["../../typings/tsd.d.ts"]
});
console.log(tsSourceCode);
fs.writeFileSync('t1.ts', tsSourceCode);