$(document).ready(function(){
    var lis=document.querySelectorAll(".type_list>li");
    var ifras=document.querySelectorAll(".right_container>div.shishen_container");
    $(ifras[0]).show().siblings().hide()
    $(".type_list>li").on("click",function(event){
        event.preventDefault();
        //console.log(lis);
        $(this).addClass("active").siblings().removeClass("active");
        var idx=$(this).index();
        // console.log(ifras[idx])
        // console.log($(ifras[idx]))
        $(ifras[idx]).show().siblings().hide();
    })
})
// console.log(lis);
// console.log(ifras);
