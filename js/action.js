// JavaScript Document design by kuro




$('html').niceScroll({

    cursorcolor: "#ccc",
    zindex: "9",
    cursorborder: false,
    cursorminheight: 64,
    cursordragontouch: true,
    scrollspeed: 100,
    mousescrollstep: 45, // 鼠標滾輪的滾動速度 (像素)
    railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: -50
    },
    autohidemode: false,
    smoothscroll: true,
    horizrailenabled: false,



});






$('#lg-bn-box ul').owlCarousel({
    margin: 0,
    responsiveClass: true,
    mouseDrag: false,
    autoplay: false,
    items: 1,
    dots: true,
    nav: false,
    animateIn: 'fadeInDown',
    animateOut: 'fadeOutUp',
    loop: true,
    responsive: {

        0: {
            items: 1
        },
        768: {
            items: 1,
            dots: true
        },
        1000: {
            items: 1,
            mouseDrag: false
        }
    }

})




// $('#hot-link').marquee({
//speed in milliseconds of the marquee
//    duration: 10000,
//gap in pixels between the tickers
//    gap: 0,
//time in milliseconds before the marquee will start animating
//    delayBeforeStart: 0,
//  pauseOnHover: true,
//'left' or 'right'
//direction: 'left',
//true or false - should the marquee be duplicated to show an effect of continues flow
//duplicated: true
//});



$('#leftmain').niceScroll({

    cursorcolor: "#dcdddd",
    cursorwidth: "20px", // cursor width in pixel (you can also write "5px")
    scrollspeed: 60,
    smoothscroll: true,
    zindex: "1",
    background: "#efefef", // change css for rail background
    cursorborder: false,
    cursordragontouch: true,
    autohidemode: false,
    horizrailenabled: false,

});




var one = $('.ul-menu').find('li:first-child');
var two = $('.ul-menu').find('li:nth-child(2)');
var three = $('.ul-menu').find('li:nth-child(3)');


one.hover(function () {

    $(this).find('a img').attr('src', 'images/menu_icon_1_h.png');

}, function () {
    $(this).find('a img').attr('src', 'images/menu_icon_1.png');
});
two.hover(function () {

    $(this).find('a img').attr('src', 'images/menu_icon_3_h.png');

}, function () {
    $(this).find('a img').attr('src', 'images/menu_icon_3.png');
});

three.hover(function () {

    $(this).find('a img').attr('src', 'images/menu_icon_5_h.png');

}, function () {
    $(this).find('a img').attr('src', 'images/menu_icon_5.png');
});






$('#team-list').owlCarousel({

    margin: 0,
    nav: false,
    responsiveClass: true,
    loop: true,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6,
            loop: false,
            dots: false,
            mouseDrag: false
        }
    }
})



$('.slide-images-box ul').owlCarousel({

    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true


})





$('i.fas.fa-cloud-sun').click(function () {

    $('#weather').fadeIn(300);


})





$(window).scroll(function () {


    if ($(window).scrollTop() < ($(window).height() - 50)) {
        $('#gotop').removeClass('vis');
    } else {

        $('#gotop').addClass('vis');
    }


});

//gotop      	
$('#gotop').click(function (e) {

    $('html,body').animate({
        'scrollTop': '0'
    }, 1000);

});


$('.collection-total a').hover(function() {

    $(this).popover('show');

}, function() {

    $(this).popover('hide');

})





//var xd = $('.collection-box li').find('span').append('<i class="fas fa-times"></i>');

var total = document.querySelectorAll('.collection-box ul li').length;
var num = document.querySelector('p.collection-total span a');

num.textContent = total;

 var list = document.querySelector('.collection-box ul');

 var sendData = $('.join');
 var data = JSON.parse(localStorage.getItem('listData')) || [];


//監聽左方
list.addEventListener('click', toggleDone, false);

 updatalist(data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Int32Array


//加入列表更新local

 sendData.click(function (e) {   


     var thisname = $(this).parents('.col-md-4').find('.article-ttitle').text();

     var todo = {content: thisname};





    //推到local



        data.push(todo);
        localStorage.setItem('listData', JSON.stringify(data));

        updatalist(data);


        //判斷重復收藏

      



    
   
   

     


 

     
  



       //判斷超過6筆跳提示

     var jointotal = document.querySelectorAll('.collection-box ul li').length;


     if (jointotal > 6) {

         swal("已加入收藏", "請至行程頁面觀看", "success");

     }




 })





// 寫入網頁
 function updatalist(items) {

     str = '';

     var len = items.length;

     for (var i = 0; i < len; i++) {

         str += '<li><span class="removeitem" title="移除" data-index=' + i + '><i class="fas fa-times"></i></span> <a href="http://google.com">' + items[i].content + '</a></li>'

     }
    


     list.innerHTML = str;


     var total = document.querySelectorAll('.collection-box ul li').length;
     var num = document.querySelector('p.collection-total span a');
     num.textContent = total;




 }

// 刪除包含local


 function toggleDone(e) {
   
   
    if(e.target.tagName =='A'){return};
    
    var index = e.target.dataset.index;


     data.splice(index, 1);

     localStorage.setItem('listData', JSON.stringify(data));
     updatalist(data);


 }



//小選單
$('.sm-menu').click(function () {

    $(this).toggleClass('vis');



    if ($(this).hasClass('vis')) {

        $('#header').addClass('vis');
        $(this).find('i').removeClass('fas fa-bars').addClass('fas fa-times');





    } else {


        $('#header').removeClass('vis');
        $(this).find('i').removeClass('fas fa-times').addClass('fas fa-bars');

    }

})



$('.collection-total a').hover(function () {

    $(this).popover('show');

}, function () {

    $(this).popover('hide');

})



var len = 50;

$('.bn-main').each(function (i) {
    if ($(this).text().length > len) {
        $(this).attr("title", $(this).text());
        var text = $(this).text().substring(0, len - 1) + "...";
        $(this).text(text);
    }
});


$('ul').contents().filter(function () {
    return this.nodeType === 3;
}).remove();


//選單開合


var mm = $('nav#left_fixed_nav > ul li a');

mm.click(
    function () {
        //收
        $('.an').slideUp(250);
        //展
        $(this).parent('li').find('.an').slideDown(250);
    }

);



//天氣切換

$('#weather-box>i').click(function () {

    $('#weather').fadeOut(500);
    $('#sm-weather-box').addClass('animated fadeInRight').fadeIn(500);

})



$('.delete').click(function () {


    $(this).parents('li').css('display', 'none');

})



function momo() {

    $('#add-allstroke').modal({})

}

new WOW().init();


$('#sm-weather-box-info').hover(function () {

    $(this).find('.theweather-images').fadeToggle(300);
    $('#master-linght').fadeToggle(300);


});




//字數
var len = 35; // 超過"..."取代
$(".title-info").each(function (i) {
    if ($(this).text().length > len) {
        $(this).attr("title", $(this).text());
        var text = $(this).text().substring(0, len - 1) + "...";
        $(this).text(text);
    }
});




//搜尋

function allsearch() {
    if (document.searchform.keys.value == "") {
        alert("請輸入關鍵字");
    } else {
        searchform.submit();
    }
    return false;
}


//判斷RWD
function isMobile() {

    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }

}



if (isMobile()) {

    $('html').getNiceScroll().remove();

}