$(function () {
//icon search
$('#search').click(function(){
    $(".menu-item").addClass('hide-item');
    $(".header_search-form").addClass('active');
    $(".close").addClass('active');
    $('#search').hide();
})
    $(".close").click(function (){
        $(".menu-item").removeClass("hide-item");
        $(".header_search-form").removeClass("active");
        $(".close").removeClass("active");
        $('#search').show();
    })

// sticky scroll header
window.addEventListener("scroll",function(){
    const header = this.document.querySelector(".header_top-inner");
    header.classList.toggle("sticky",window.scrollY>0)
})
//slider
$('.slider_inner').slick({
    dots:true,
    arrows:false,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
});

//Load more
$('#loadMore').click(function(){
    $('#boxs .box:hidden').slice(0, 3).slideDown()
    if(($('#boxs .box:hidden')).length == 0) {
        $('#loadMore').fadeOut('slow')
    }
});

//Collections slider
$('.collections_inner').slick({
    dots:false,
    arrows:true,
    slidesToShow:1,
    slidesToScroll:1,
  
});
});