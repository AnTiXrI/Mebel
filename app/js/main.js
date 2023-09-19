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

$('#newItemsLoadMore').click(function(){
    $('#newBoxs .newBox:hidden').slice(0, 3).slideDown()
    if(($('#newBoxs .newBox:hidden')).length == 0) {
        $('#newItemsLoadMore').fadeOut('slow')
    }
});

//Collections slider
$('.collections_inner').slick({
    dots:false,
    arrows:true,
    slidesToShow:1,
    slidesToScroll:1,
  
});

//Hamburger
$('.hamburger').click(function() {
    $(this).toggleClass('on')
    $(".header_top").toggleClass("off");
    $(".sales-leaders_discount").toggleClass("off");
    $(".new-items_discount").toggleClass("off");
    $(".slick-arrow").toggleClass("off");
})

//Sidebar
$('ul.main-menu li').click(function (e){
    e.preventDefault();

    if ($(this).siblings('li').find('ul.sidebar_submenu:visible').length) {
        $('ul.sidebar_submenu').slideUp('normal');
    }
    $(this).find('ul.sidebar_submenu').slideToggle('normal');
});

var t1 = new TimelineMax({ paused: true });

t1.to('.menu',0.3,{
    autoAlpha:1
});

t1.staggerFrom(
    '.main-menu li a:not(.sidebar_submenu li a)',
    1,
    {
        opacity:0,
        y:10,
        ease: Power3.easeInOut
    },
    0.1
);

t1.from('.sidebar_submenu', 0.3, {
    autoAlpha:0
})

t1.reverse();

$(document).on('click','.menu-btn',function() {
    t1.reversed(!t1.reversed());
});

$(document).on('click','.close-menu',function() {
    t1.reversed(!t1.reversed());
});

});