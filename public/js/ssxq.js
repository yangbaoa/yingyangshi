$(document).ready(function(){
    var pic_item=document.querySelectorAll(".person_pic>div");
    var tbtn=document.querySelectorAll(".person_tab>span");
    //console.log(pic_item);
    //console.log(tbtn);
    $(".person_tab>span").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(pic_item[$(this).index()]).addClass("show").siblings().removeClass("show")
    })

    var width=$(".pic_btn_container>ul").find("li").eq(0).width();
    //console.log(width)
    var len=0
    var pli=document.querySelectorAll(".pic_btn_container>ul>li")
    var pul=$(".pic_btn_container>ul")
    $(".next").on("click",function(){
        //console.log(2)
        if(len<pli.length-1){
            len++;
            pul.animate({
                "left":-width*len
            })
        }else if(len==pli.length-1){
            len=0;
            pul.animate({
                "left":"0"
            })
        }
    })
    $(".prev").on("click",function(){
        //console.log(1)
        if(len>0){
            len--;
            pul.animate({
                "left":-width*len
            })
        }else if(len==0){
            len=pli.length-1
            pul.animate({
                "left":-width*len
            })
        }
    })
})