// JavaScript Document design by kuro

function loadCSS() {

    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
      document.write('<link href="css/style.css" rel="stylesheet" type="text/css" media="screen" />');
      $('#select').removeClass('selectpicker');
    } else {
      document.write('<link  href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700&display=swap" rel="stylesheet preload" type="text/css" media="screen" />');
    }
  }

  loadCSS();



  //判斷RWD


function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}

if(isMobile()){
    
   
    
    
            $("#leftmain").getNiceScroll().hide();
            $("html").getNiceScroll().hide();  
    
    //js-change-height
       document.querySelector('#rightmain').style.height = window.innerHeight + 'px';
       
     
    
        window.onresize = function() {
            
         var hh = window.innerHeight;   
       
        document.querySelector('#rightmain').style.height = hh + 'px';
       

    }

 
         
}


else{
    
    
    
    
          $('html').niceScroll({
               
               cursorcolor:"#ccc",
               zindex: "10",
               cursorborder: false,
               cursordragontouch: true,
               scrollspeed:100,
               autohidemode:false, 
               smoothscroll:true,
               horizrailenabled: false,
             
           
           });

    
      $('#leftmain').niceScroll({
              
      cursorcolor:"#dcdddd",
      cursorwidth: "20px", // cursor width in pixel (you can also write "5px")
      scrollspeed:60,
      smoothscroll:true,
      zindex: "1",
      background: "#efefef", // change css for rail background
               cursorborder: false,
               cursordragontouch: true,
               autohidemode:false, 
               horizrailenabled: false,
             
           
           });
             

}



    $(window).scroll(function(){
        
        
	if ($(window).scrollTop() < ($(window).height()-50)){
		$('#gotop').removeClass('vis');
	}
      
	else{
        
		$('#gotop').addClass('vis');    
	}
      
        
});
                
          
         //gotop      	
		$('#gotop').click(function(e) {
           
          $('html,body').animate({'scrollTop':'0'},1000)
        });
               
               
  
            $('.sm-menu').click(function(){
                
             $(this).toggleClass('vis');
                
                
                
                if( $(this).hasClass('vis') ){
                    
                $('#header').addClass('vis');
                $(this).find('i').removeClass('fas fa-bars').addClass('fas fa-times');  
                  
                } else {
                    
                    
                     $('#header').removeClass('vis');
                     $(this).find('i').removeClass('fas fa-times').addClass('fas fa-bars');  
                    
                }
                
            })





          
            $('.collection-total a').hover(function(){
                
             $(this).popover('show');
                
            },function(){
                
             $(this).popover('hide');
                
            })


               
    var len = 50; 
               
    $('.bn-main').each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
            
    $('ul').contents().filter(function() {
    return this.nodeType === 3;
	}).remove();




//選單開合


var mm  = $('nav#left_fixed_nav > ul li a');

mm.click(
 function() {
  //收
  $('.an').slideUp(250);
  //展
  $(this).parent('li').find('.an').slideDown(250);
 }
);






$('.delete').click(function(){
   
    
 $(this).parents('li').remove();
    
})

             




//路線圖視窗

$('.route').click(function(){ 
   
    
 $('#route-plan').addClass('vis fadeIn animated');
    
    
})


//關閉路線圖視窗

$('#close').click(function(){
    
   $('#route-plan').addClass('fadeOut animated').removeClass('vis');
    
    
  setTimeout(function(){
      
      $('#route-plan').removeClass(); 
      
      
  },1000)
    
})



//移除收藏

$('.remove-icon').click(function(){
    
    var tt = $(this).parents('.col-md-4.col-6');
    
    tt.addClass('fadeOut animated');
    
    setTimeout(function(){
        
        tt.remove();
        
    },500)
    
    
})








$('#sm-weather-box-info').hover(function(){
    
    $(this).find('.theweather-images').fadeToggle(300);
    $('#master-linght').fadeToggle(300);
    
    
})

//字數
    var len = 35; // 超過"..."取代
    $(".title-info").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });


$('.list-btn a').click(function(){
    
    
    $(this).toggleClass('vis');
    
    if( $(this).hasClass('vis') ){
        
        $('#rightmain').addClass('vis');
        $(this).text('關閉')
        
    }else{
        
          $('#rightmain').removeClass('vis')
          $(this).text('查看店家')
        
    }
    
})


//判斷行程


$('#add').click(function(){


    var strokenum = document.querySelector('#select-day-box ul').children.length;

if ( strokenum ==4 ){

    swal({
        title: "小提醒",
        text: "只能規劃3筆行程唷!",
        icon: "warning",
        dangerMode: true,
      })

}else{

   $('#addstroke').modal();


}


    



})









