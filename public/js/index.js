//头部的鼠标事件
$(document).ready(function(){
    var tnav=document.querySelectorAll(".top_nav>a:not(:first-child)");
    var subnav=document.querySelectorAll(".subnav>div.subnav_warp>div.subnav_item");
    console.log(tnav);
    console.log(subnav);
    $(".top_nav").on("mouseenter","[data-toggle=navs]",function(e){
        var $a=$(this);
        var index=$a.index();
        console.log(index)
        $a.addClass("active").siblings().removeClass("active");
        $a.parent().next().addClass("active");
        $(subnav[index - 1]).show().siblings().hide();
    }).mouseleave(function(){
        $(".subnav").removeClass("active");
        //$(".top_nav>a").removeClass("active");
        $(".top_nav>a").removeClass("active")
    })

    /*var $a=$(this);
    if(!$a.is(".active")){
        $a.parent().next().addClass("active");
        $a.addClass("active").siblings().removeClass("active");
        var id=$a.attr("href");
        $(id).show().siblings().hide();
        }
    })
    .mouseleave(function(){
        $(".subnav").removeClass("active");
        //$(".subnav_item").show();
        $(".top_nav>a").removeClass("active");

        console.log(1111111111);
    })*/

})
// 大背景上的轮播
$(document).ready(function(){
    var cont=$("#cont");
    var box=document.querySelector("div:nth-child(2)");
    var ul=$(".box_ul");
    var oneWidth = ul.find("li").eq(0).width()
    var lis=ul.find("li")
    //console.log(lis)
    //console.log(oneWidth)
    var timer=null
    var num=0;
    $(".n_next_btn").on("click",function(){
        if(num<2)
        num++;
        //console.log(1)
        ul.animate({
            "right":oneWidth*num
        })
    })
    $(".n_prev_btn").on("click",function(){
        if(num>0)
        num--
        ul.animate({
            "right":oneWidth*num
        })
    })
    var fun=function(){
        if(num<2){
        num++;
        //console.log(1)
        ul.animate({
            "right":oneWidth*num
        })
        }else if(num==2){
            num=0;
            ul.animate({
                "right":oneWidth*num
            })
        }
        //console.log(num)
    }
    var timer = setInterval(fun,5000);
})
// 式神阴阳师的点击事件
var plis=document.querySelectorAll("#pinan>div:first-child>ul>li");
console.log(plis);
var divs=document.querySelectorAll("#pin>div");
//console.log(divs)
$("#pinan>div:first-child>ul>li").on("click",function(e){
    var $li=$(this)
    //console.log(1)
    $li.addClass("on").siblings().removeClass("on");
    if($li.is(".on")){
        var num=$li.index()
       $(divs[num]).addClass("show").siblings().removeClass("show")
    }
    //console.log($li.index())
})
// 式神切换
$("#shis").ready(function(){
    var num=0;
    var item=document.querySelectorAll("#shis>div.bigImg_item");
    $(item[0]).addClass("active");
    $(item[num]).children().children().children().addClass("active");
    //console.log(item[0])
    $(".bigImg_btn_right").on("click",function(e){       
        if(num<item.length-1){    
            num++;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }else if(num==item.length - 1){
            num=0;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }
    })
    $(".bigImg_btn_left").on("click",function(e){       
        if(num<item.length-1){    
            num++;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }else if(num==item.length - 1){
            num=0;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }
    })
})
$("#zhujue").ready(function(){
    var item=document.querySelectorAll("#zhujue>div:nth-child(2)>div.bigImg_list>div.bigImg_item");
    //console.log(items)
    var num=0
    $(".bigImg_btn_right").on("click",function(e){
        if(num<item.length-1){    
            num++;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }else if(num==item.length - 1){
            num=0;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }
    })
    $(".bigImg_btn_left").on("click",function(e){
        if(num<item.length-1){    
            num++;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }else if(num==item.length - 1){
            num=0;
            $(item[num]).addClass("active").siblings().removeClass("active");     
            $(item[num]).children().children().children().addClass("active");
            $(item[num]).siblings().children().children().children().removeClass("active");  
        }
    })
})
$(".zhujue_tabs").on("click",".zhujue_tab",function(event){
    var id=$(this).attr("href");
    $(this).addClass("dian").siblings().removeClass("dian")
    $(id).addClass("active").siblings().removeClass("active").children().children().children().removeClass("active");
    $(id).children().children().children().addClass("active");
    event.preventDefault()
})
$(".clr").on("mouseenter","li",function(){
    var lis=document.querySelectorAll(".stategy_tab>ul.clr>li");
    var divs=document.querySelectorAll(".stategy_bottom>div.stategy_con");
    $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();

        $(divs[num]).addClass("show").siblings().removeClass("show");
    
})


$(document).ready(function(){

    $("#video1").on("click",function(){
        $("#video1").addClass("play");
        //console.log(11)
        //console.log($("#video").is(".play"))
        if($("#video1").is(".play")){
            //console.log(11)
            $(".video1").addClass("show")
            $(".video1_close").on("click",function(){
                $(".video1").removeClass("show")
            })
        }
    })
    $("#video2").on("click",function(){
        $("#video2").addClass("play");
        //console.log(11)
        //console.log($("#video").is(".play"))
        if($("#video2").is(".play")){
            //console.log(11)
            $(".video2").addClass("show")
            $(".video2_close").on("click",function(){
                $(".video2").removeClass("show")
            })
        }
    })
})