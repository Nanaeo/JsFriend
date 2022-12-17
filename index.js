#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
//Loading
// 检测版本
var AppEnv = {}
AppEnv.NodeVer = process.version.substr(1).split(".");
AppEnv.AppVer = "1.0.0".split(".");
//测试Github网络
if(Number(AppEnv.NodeVer[0])<17){console.log("Please Update NodeJs");process.exit(1);}
console.log(AppEnv.NodeVer);
//需要先检测环境 再设置环境变量和配置
var bashargs = process.argv.splice(2);
console.log('所传递的参数是：', bashargs);
//输出启动命令行
