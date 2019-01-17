$(document).ready(function(){
    var tits=document.querySelectorAll(".nav_list>li");
    var boxs=document.querySelectorAll("#box>div")
    //console.log(tits);
    //console.log(boxs);
    $(".nav_list>li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var tnum=$(this).index();
        console.log(tnum)
        $(boxs[tnum]).addClass("show").siblings().removeClass("show")
        
    })
    
})