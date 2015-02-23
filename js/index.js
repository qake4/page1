$( document ).ready(function() {

	function PlayAnim(item) {
		$(item).css({
			'-webkit-animation-play-state': 'running',
			'-moz-animation-play-state': 'running',
			'-o-animation-play-state': 'running',
			'animation-play-state': 'running'
		})
	};


	var navbarOpened = false;
	$(".navbar-opener").click(function() {
		if (navbarOpened) {
			navbarOpened = false;

			$(".navbar-text-holder").removeClass("slidedown");
			$(".navbar-text-holder").addClass("slideup");
			PlayAnim(".navbar-text-holder");

			
			$("#navbar-opener-line-first").removeClass("firston");			
			$("#navbar-opener-line-first").addClass("firstoff");
			PlayAnim("#navbar-opener-line-first");

			$("#navbar-opener-line-second").removeClass("secondon");			
			$("#navbar-opener-line-second").addClass("secondoff");
			PlayAnim("#navbar-opener-line-second");

			$("#navbar-opener-line-third").removeClass("thirdon");			
			$("#navbar-opener-line-third").addClass("thirdoff");
			PlayAnim("#navbar-opener-line-third");
			
		}
		else {
			navbarOpened = true;
			$(".navbar-text-holder").removeClass("slideup");
			$(".navbar-text-holder").addClass("slidedown");
			PlayAnim(".navbar-text-holder");
			

			$("#navbar-opener-line-first").removeClass("firstoff");
			$("#navbar-opener-line-first").addClass("firston");
			PlayAnim("#navbar-opener-line-first");

			$("#navbar-opener-line-second").removeClass("secondoff");
			$("#navbar-opener-line-second").addClass("secondon");
			PlayAnim("#navbar-opener-line-second");

			$("#navbar-opener-line-third").removeClass("thirdoff");
			$("#navbar-opener-line-third").addClass("thirdon");
			PlayAnim("#navbar-opener-line-third");

		}
	});


//resize
	function MainPage(){

		if ($(window).height() > 400) {
			$("#main-page").css("height", $(window).height());
			$(".slogan").css("top", $(window).height() / 2 - 50);
			$(".learnmore").css("top", $(window).height() - 60);
		}
		else{
			$("#main-page").css("height", "400px");	
			$(".slogan").css("top", 200 - 50);
			$(".learnmore").css("top", 400 - 60);	
		}
	}



	//first load
		MainPage();


	//resize (mobile-removeClass, main-page-height)
	$(window).on("resize", function() {
		if ($(window).width() > 480) {

			$("#navbar-opener-line-first").removeClass("firston");
			$("#navbar-opener-line-first").removeClass("firstoff");
			
			$("#navbar-opener-line-second").removeClass("secondon");
			$("#navbar-opener-line-second").removeClass("secondoff");

			$("#navbar-opener-line-third").removeClass("thirdon");
			$("#navbar-opener-line-third").removeClass("thirdoff");

			$(".navbar-text-holder").removeClass("slidedown");
			$(".navbar-text-holder").removeClass("slideup");

			navbarOpened = false;
		}


		if ($(window).width() < 768) {
			$('.comment').removeClass("commentoff");
			$('.comment').removeClass("commenton");

			$('.page-pics').find('img').css('margin-top', '0px');
		}
	


		//main page resize height
			MainPage();
	});
	

	$('.learnmore').click(function(){
		if ($(window).height() > 400) {
			$('html, body').animate({scrollTop : $(window).height() + 1},500);
		}
		else{
			$('html, body').animate({scrollTop : 400},500);
		}
		
		return false;
	});



	//page image slide up desktop anim
		$(".page").on( "mouseenter", function() {
			if ($(window).width() >= 768) {
				$(this).find('img').stop();
				$(this).find('img').animate({ marginTop: '0px'}, 250);

				$(this).find('.comment').removeClass("commentoff");
				$(this).find('.comment').addClass("commenton");
				PlayAnim($(this).find('.comment'));
			}
		});
		$(".page").on( "mouseleave", function() {
			if ($(window).width() >= 768) {
				$(this).find('img').stop();
				$(this).find('img').animate({ marginTop: '60px'}, 250);


				$(this).find('.comment').removeClass("commenton");
				$(this).find('.comment').addClass("commentoff");
				PlayAnim($(this).find('.comment'));
			}
		});

});


