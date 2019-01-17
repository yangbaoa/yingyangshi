$(function(){
    $("<link rel='stylesheet' href='css/style.css'>").appendTo("head");
    $.ajax({
        url:"carousel.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#carousel")
        }
    })
})




window.onload = function() {
    var swiper = new Swiper('.swiper-container',{
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function(swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
}

