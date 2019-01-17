$(document).ready(function(){
    if($(".btn-close").is(".show")){
        $(".btn-close").on("click",function(){
       //console.log($(".btn-close").is(".show"))
            $(".btn-close").removeClass("show");
            $(".btn-open").addClass("show")
            //console.log(!$(".btn-close").is(".show"))
            $(".open").animate({
                "right":"-155"
            })
            if(!$(".btn-close").is(".show")){
                //console.log(11)
                $(".btn-open").on("click",function(){
                    $(".btn-close").addClass("show");
                    $(".btn-open").removeClass("show");
                    $(".open").animate({
                        "right":"0"
                    })
                })
            }
        })
    }

    $("#video").on("click",function(){
        $("#video").addClass("play");
        //console.log(11)
        //console.log($("#video").is(".play"))
        if($("#video").is(".play")){
            //console.log(11)
            $(".video").addClass("show")
            $(".video-close").on("click",function(){
                $(".video").removeClass("show")
            })
        }
    })

    var btns=document.querySelectorAll(".box1>ul>li");
    var items=document.querySelectorAll(".wrapper>div.item");
    console.log(items)
    $(".box1>ul>li").on("click",function(){
        //console.log(11)
        $(".attention").addClass("show")
        var idx=$(this).index();
        $(items[idx]).addClass("on").siblings().removeClass("on")
        $(".dialog-close").on("click",function(){
            $(".attention").removeClass("show")
        })

        /*if(idx>0){
            $(".prev").addClass("show")
            $(".next").addClass("show")
            
            $(".prev").on("click",function(){
                idx--
                if(idx<items.length-1&&idx+1!=0){
                    //console.log(idx)
                    $(items[idx]).addClass("on").siblings().removeClass("on")
                }
                if(idx==0){
                    //console.log(idx)
                    $(".prev").removeClass("show")
                }
            })
        }
        console.log(idx)
        if(idx==items.length-1){
            $(".next").removeClass("show")
            idx--
            $(".next").on("click",function(){
                $(items[idx]).addClass("on").siblings().removeClass("on")   
            })
        }

        if(idx<items.length-1){
            $(".next").addClass("show")
            $(".next").on("click",function(){
                if(idx<items.length-1){
                    idx++
                    console.log(idx)
                    $(items[idx]).addClass("on").siblings().removeClass("on") 
                }
                if(idx==items.length-1){
                    $(".next").removeClass("show")
                }
            })
        }*/
    })
})