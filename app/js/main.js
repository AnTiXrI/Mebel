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

});