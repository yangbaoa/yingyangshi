//导入express模块
const express=require("express");
//导入路由
const loginRouter=require("./routes/login");
//导入第三方插件
const bodyParser=require("body-parser");
//创建express模块
var app=express();
//监听端口
app.listen(3000);
//使用第三方插件
app.use(bodyParser.urlencoded({
    extended:false
}))
//托管静态文件
app.use(express.static(__dirname+"/public"));
//将路由挂载到/
app.use("/",loginRouter);