let fs = require("fs");
let path = require("path");
//Loading
// 检测版本
var AppEnv = {}
AppEnv.NodeVer = process.version.substr(1).split(".");
AppEnv.Ver = "1.0.0".split(".");
console.log(AppEnv);
//需要先检测环境 再设置环境变量和配置
