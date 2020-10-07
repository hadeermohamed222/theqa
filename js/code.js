$(document).ready(function(){
	 if ($('.home').scrollTop() == 0) {
				  $('.scroll-titel').animate({
		            width:'0px',
			        },1000);
				   };
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop(),
		    divOffset = $('.our-servese').offset().top,
			divOffsetSc = $('.about-us').offset().top,
			divOffsetTh = $('.our-work').offset().top,
			divOffsetFo = $('.sharaka').offset().top,
			divOffsetFi = $('.career').offset().top;
			
		     if(scrolling >=  divOffsetSc){
				$('.about-us-scroll-titel').animate({
		         width:'0px',
	              },1000);
				 $('.bt-about-us').fadeIn(2000);
				 $('.img-about-us').fadeIn(200);
				 $('.img-about-us').animate({
		           top:'0px',
	               },500);
			   
		     };
		     if(scrolling >=  divOffset){
			   $('.scroll-titel-s').animate({
		         width:'0px',
	             },1000);
	           $('.scroll-titel-p').animate({
		         width:'0px',
	             },1000);
				 $('.img-titel-serves').fadeIn(200);
			   $('.img-titel-serves').animate({
		        top:'0px',
	             },500);
		    };
		    if(scrolling >=  divOffsetTh){
			  $('.our-work-scroll-titel').animate({
		        width:'0px',
	            },1000);
				$('.our-work-scroll-titel-p').animate({
		         width:'0px',
	            },1000);
			   $('.img-our-work-scroll').fadeIn(200);
				 $('.img-our-work-scroll').animate({
		           top:'0px',
	               },500);
		    };

		    if(scrolling >=  divOffsetFo){
			  $('.titel-sharaka').animate({
		            width:'0px',
	              },700);
              $('.sc-p-sharaka').fadeIn(1000);
	          $('.img-sharaka-info').fadeIn(200);
				 $('.img-sharaka-info').animate({
		           top:'0px',
	               },500);

		    };
		   if(scrolling >=  divOffsetFi){
			 	$('.titel-career').animate({
		             width:'0px',
	                 },700);
	             $('.p-career').fadeIn(2000);
	            $('.a-career').fadeIn(2000);
				$('.img-career').fadeIn(200);
				 $('.img-career').animate({
		           top:'0px',
	               },500);
				
		   };
		
		
	});
	

	$('.menu li a').click(function(event){
      event.preventDefault();
	  
	  $('html,body').animate({
		   
		   scrollTop: $('#'+$(this).data('scroll')).offset().top +1
		   
	  },500);
	  });
	  $('.menu-footer li a').click(function(event){
      event.preventDefault();
	  
	  $('html,body').animate({
		   
		   scrollTop: $('#'+$(this).data('scroll')).offset().top +1
		   
	  },500);
			
	});
	$('.scroll-to-top').click(function(event){
		 event.preventDefault();
	  
	  $('html,body').animate({
		   
		   scrollTop: 0
		   
	  },1000);
	});
	
	 $('.nav-button').click(function(){
	 $('body').toggleClass('nav-open');
     });
   
    $('.sc-right').click(function(){
	$('.popup').fadeIn(500);
    });
    $('.popup').click(function(){
	$(this).fadeOut(500);
    });
	$('.popup .con-popup').click(function(event){
		event.stopPropagation();
	});
	$('html').niceScroll({
		cursorcolor:"#39CCDB",
		cursorwidth: '13px',
		autohidemode: false,
        horizrailenabled: false
	});
	
});