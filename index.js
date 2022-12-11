let fs = require("fs");
let path = require("path");
//Loading
// 检测版本
var AppEnv = {}
AppEnv.NodeVer = process.version.substr(1).split(".");
AppEnv.AppVer = "1.0.0".split(".");
//测试Github网络
if(Number(AppEnv.NodeVer[-1])<19){console.log("Please Update NodeJs");process.exit(1);}
console.log(AppEnv.NodeVer[0]));
//需要先检测环境 再设置环境变量和配置
