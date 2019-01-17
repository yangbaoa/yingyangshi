//导入数据库模块
const mysql=require("mysql");
//创建数据库链接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"yin",
    connectinLimit:15
})
//导出
module.exports=pool;