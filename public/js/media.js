$(document).ready(function(){
    var btn_nav=document.querySelectorAll(".nav>a");
    var img=document.querySelectorAll(".center>img");
    console.log(btn_nav);
    console.log(img);
    $(".nav>a").on("mouseenter",function(){
        //console.log(11)
        var index=$(this).index();
       // console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(img[index-1]).addClass("on").siblings().removeClass("on")
    })
    var num=0;
    var timer=null;
    var fun=function(){
        if(num<btn_nav.length){
            num++;
            //console.log(num)
            $(btn_nav[num-1]).addClass("active").siblings().removeClass("active");  
            $(img[num-1]).addClass("on").siblings().removeClass("on")
        }
        if(num==btn_nav.length){
            num=0
        }
    }
    var timer=setInterval(fun,5000)
})