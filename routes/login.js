//导入express模块
const express=require("express");
//导入连接池
const pool=require("../pool");
//创建路由器
var router=express.Router();
//login路由
router.post("/login",(req,res)=>{
    var $name=req.body.nname;
    var $pwd=req.body.npwd;
    if(!$name){
        res.send("用户名错误或不存在")
        return;
    }
    if(!$pwd){
        res.send("用户密码错误或不存在")
    }
    var sql="select * from yys where nname=? and npwd=?";
    pool.query(sql,[$name,$pwd],(err,result)=>{
        if(err) throw err
        if(result.length>0){
            res.send("登录成功")
        }else{
            res.send("登录失败")
        }
    })
})
//reg路由
router.post("/reg",(req,res)=>{
    var $name=req.body.nname;
    var $pwd=req.body.npwd;
    var $email=req.body.email;
    if($name==""){
        res.send("用户名不能为空")
        return
    }
    if($pwd==""){
        res.send("用户密码不能为空")
        return
    }
    if($email==""){
        res.send("用户邮箱不能为空")
        return
    }
    var sql="INSERT INTO yys values(null,?,?,?,null,null,null,0)";
    pool.query(sql,[$name,$pwd,$email],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            //res.send("注册成功")
            res.send({code:1,msg:"注册成功"})
        }
    })
})
//导出
module.exports=router;