
$(document).ready(function() {

    var nav_offset_top = $('.nav').offset().top;
    var nav = function(){
        var scroll_top = $(window).scrollTop();
        if (scroll_top > nav_offset_top) {
            $('.nav').css({ 'position': 'fixed', 'top':0, 'left':0 });
            $('.nav').css({ 'width': '100%' });
            $('.nav').css({ 'background-color': '#fff' });
            $('.nav').css({ 'opacity': '0.6' });
            $('.nav').css({ 'z-index': '999' });
        } else {
            $('.nav').css({ 'position': 'relative' });
            $('.nav').css({ 'opacity': '1' });
            $('.nav').css({ 'background-color': '#fff' });
        }
    };
    nav();
    $(window).scroll(function() {
        nav();
    });

    //$( "span.menu" ).click(function() {
    //    $( ".navig" ).slideToggle( "slow", function() {
    //    });
    //});

    $( '#basket' ).click(function() {
        $( '#basket-list' ).toggleClass("hidden");
    });

    $('.nav-search').click(function () {
        $('#search-hidden').toggleClass("hidden");
        $('.ul-wid').toggleClass("ul-wid");
    });

    $( '#order' ).click(function() {
        $( '.shipping' ).toggleClass("hidden");
        $( '.bag-order' ).toggleClass("hidden");
    });
    $( '#ship' ).click(function() {
        $( '.shipping' ).toggleClass("hidden");
        $( '.bag-order' ).toggleClass("hidden");
    });
})