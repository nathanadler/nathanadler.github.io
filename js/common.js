$(function() {

	// side menu
	$(".side-menu-btn").click(function() {
		var menu = $(".menu")
		var button = $(".side-menu-btn")
		var w = menu.width();
		var speed = 500

		$(".side-menu-btn").toggleClass("open");

		if (button.hasClass("open")) {
			menu.animate({
		    	left: "0px"
	    	}, speed);
		}
		else {
			menu.animate({
		    	left: -w
	    	}, speed);

	    	button.animate({
		    	// top: "15px"
	    	}, speed);
		};
	});

	// menu scroll
	$(".menu").on("click","a", function (event) {

		var menu = $(".menu")
		var button = $(".side-menu-btn")
		var speed = 500

		if (button.hasClass("open")) {
			menu.animate({
		    	left: "-100%"
	    	}, speed);
		}

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// countdown
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var days = 5;
	var endDate = new Date();
	var res = endDate.setTime(endDate.getTime() + (days * 24 * 60 * 60 * 1000));
	endDate = new Date(res);

	var endDay 		= (" " + (endDate.getDate()).toString() + " ");
	var endMonth 	= monthNames[endDate.getMonth()];
	var endYear		= endDate.getFullYear();

	var dt = (endMonth + "," + endDay + endYear + " 00:00:00");

	$('.timer').countdown({
		date: dt,
		render: function(data) {
			var el = $(this.el);
			el.empty()
			.append("<div class='timer-item years'>" + this.leadingZeros(data.years, 2) + " <div class='date-caption'>лет</div></div>")
			.append("<div class='timer-item days'>" + this.leadingZeros(data.days, 2) + " <div class='date-caption'>дней</div></div>")
			.append("<div class='timer-item hours'>" + this.leadingZeros(data.hours, 2) + " <div class='date-caption'>часов</div></div>")
			.append("<div class='timer-item minutes'>" + this.leadingZeros(data.min, 2) + " <div class='date-caption'>минут</div></div>")
			.append("<div class='timer-item seconds'>" + this.leadingZeros(data.sec, 2) + " <div class='date-caption'>секунд</div></div>");
		}
	});

	// counters
	$('.up').counterUp({
		delay: 1,
		time: 100
	});

	$(".usage-item").animated("slideInUp");
	$(".work-item").animated("bounceInRight");

	// gallery
	$('.owl-gallery').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})

	// clients
	$('.owl-clients').owlCarousel({
	    loop:true,
	    margin:120,
	    nav:true,
	    navText:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	// youtube
	"use strict";
	$(function() {
	    $(".youtube").each(function() {
	        // Based on the YouTube ID, we can easily find the thumbnail image
	        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
	    
	        // Overlay the Play icon to make it look like a video player
	        // $(this).append($('<div/>', {'class': 'play'}));
	    
	        $(document).delegate('#'+this.id, 'click', function() {
	            // Create an iFrame with autoplay set to true
	            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
	            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
	    
	            // The height and width of the iFrame should be the same as parent
	            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
	    
	            // Replace the YouTube thumbnail with YouTube HTML5 Player
	            $(this).replaceWith(iframe);
	        });
	    });
	 });

	// popups
	$('.popup').fancybox();

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#feedback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function() {

	// equal height for some items
	var $container = $('.container');
	$container.imagesLoaded(function () {
		$('.perk-img').equalHeights();
		$('.caption-block').equalHeights();
		$('.usage-item').equalHeights();
		$('.work-item').equalHeights();
	});

});
