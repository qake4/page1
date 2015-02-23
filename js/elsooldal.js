
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
	});	if ($(window).width() > 480) {

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



	function NavbarBgAnim(itemname) {
		$("#" + itemname + "").mouseenter(function() {
			$(this).removeClass(itemname + "simple");
			$(this).addClass(itemname + "hover");
			PlayAnim(this);
		});
		$("#" + itemname + "").mouseleave(function() {
			$(this).removeClass(itemname + "hover");
			$(this).addClass(itemname + "simple");
			PlayAnim(this);
		});
	}

	// navbar gb animation
		//work
			NavbarBgAnim("work");
		
		//company
			NavbarBgAnim("company");

		//carrers
			NavbarBgAnim("carrers");

		//writing
			NavbarBgAnim("writing");

		//contact
			NavbarBgAnim("contact");

	function MainPage(){

		$(".arrow-holder").css({
			'top': $(window).height() - 120,
			'left': $(window).width() - 120
		});


		if ($(window).height() > 400) {
			$(".main-page").css("height", $(window).height());
			
			$(".learnmore").css("top", $(window).height() - 60);
		}
		else{
			$(".main-page").css("height", "400px");

			$(".learnmore").css("top", 400 - 60);
		}

		if ($(window).width() < 1200) {
			$(".main-page").css("background-size", "1200px auto");
		}
		else {
			$(".main-page").css("background-size", "" + $(window).width() + "px auto");
		}
	}

	//first load
		MainPage();


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


		//main page resize height
			MainPage();
	});

});


