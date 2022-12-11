let fs = require("fs");
let path = require("path");
//Loading
// 检测Nodejs版本 当前网络状态
var AppEnv = {"NodeVer":process.version.substr(1).split(".")}
console.log(AppEnv);
//需要先检测环境 再设置环境变量和配置
