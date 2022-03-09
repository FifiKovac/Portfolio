// main js styles
//preloader
let $ = jQuery;
var isVisited = sessionStorage.getItem("visited");
if ($('.preloader').length > 0 && isVisited != 'yes') {
	$('main').css({visibility: 'hidden'});
	$('footer').css({visibility: 'hidden'});
	$('.site_header').css({visibility: 'hidden'});
	$(window).on('load', function () {
		$('.preloader').css({'display': 'flex'});
		$('.preloader').find('.preloader__text').fadeIn();
	});
}

jQuery(document).ready(function ($) {

	//change parallax on devices over 1440px
	if($(window).width() >= 1440){
		$('.s--intro .parallax_image').attr('data-rellax-speed', '-5');
	}

	// horizontal parallax
	$(window).on("scroll", function() {
		var parallaxElement = $(".horizontal"),
		    parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
			for (var i = 0; i < parallaxQuantity; i++) {
				var currentElement = parallaxElement.eq(i),
				    windowTop = $(window).scrollTop(),
				    elementLeft = currentElement.offset().left,
				    elementWidth = currentElement.width(),
				    viewPortHeight = window.innerWidth * 0.4 - elementWidth*.5,
				    scrolled = windowTop - elementLeft + viewPortHeight;
				currentElement.css({
					transform: "translate3d(" + scrolled * -0.25 + "px, 0, 0)"
				});
			}
		});
	});

	//animate on scroll
	var holder_photo = $('.holder--photo');
	if(holder_photo.length > 0){
		holder_photo.css({backgroundColor : 'white'});
		$('.s--testimony').css({backgroundColor : 'white'});
		var gray = '#f7f7f7';
		$(window).on('scroll', function(){
			if($(window).scrollTop() >= holder_photo.offset().top - $(window).height()*.8){
				$('.holder--photo').css({backgroundColor : gray, transition: "all 1s ease"});
			}
			if($(window).scrollTop() >= $('.s--testimony').offset().top - $(window).height()*.8){
				$('.s--testimony').css({backgroundColor : gray, transition: "all 1s ease"});
			}
		});
	}


	// preloader
	setTimeout(function () {
		$('.fo').hide();
		$('.bracket--right').css({marginLeft : '325px'}).animate({
			marginLeft: 0
		}, {
			duration: 300, complete: function () {
				$('.preloader').fadeOut(500);
				$('main').css({visibility: 'visible'});
				$('footer').css({visibility: 'visible'});
				$('.site_header').css({visibility: 'visible'});
			}
		});
		sessionStorage.setItem("visited", "yes");
	}, 3500);
	var rellax = new Rellax('.rellax', {
		center: true
	});

	// ********************************************
	// slider case studies
	// ********************************************
	var slider = $('.portfolio__view');
	var waitings = $('.portfolio__preview');
	var content = $('.portfolio__content');
	var slideCount = $('.portfolio__view img').length;

	slider.find('img').on('click', function () {
		id = $(this).data('index');
		console.log(id + ' funguje');
		content.find('.content_' + id).find('.btn--view')[0].click();
	});


	if (slider.length > 0) {
		slider.find('.slide_1').addClass('active');
		waitings.find('.slide_2').fadeIn(200);
		content.find('.content_1').fadeIn(200);
		var timer = setInterval(function () {
			nextSlide();
		}, 6000);
	}

	$('.portfolio__content .btn--prev').on('click', function () {
		prevSlide();
		clearInterval(timer);
		timer = setInterval(function () {
			nextSlide();
		}, 6000);
	});

	$('.s--portfolio .next').on('click', function () {
		nextSlide();
		clearInterval(timer);
		timer = setInterval(function () {
			nextSlide();
		}, 6000);
	});

	function nextSlide() {
		var index = slider.find('.active').data('index');
		if (!$(slider.find('*')).is(':animated')) {
			slider.find('.active').animate({
				marginLeft: '-120%'
			}, {
				duration: 600, complete: function () {
					$(this).removeClass('active').appendTo(slider).css({marginLeft: '0'});
				}
			});
			index == slideCount ? index = 0 : index;
			slider.find('.slide_' + ++index).addClass('active');
			next = index + 1;
			next > slideCount ? next = 1 : next;
			waitings.find('img').hide();
			waitings.find('.slide_' + next).fadeIn(200);
			content.find('.content_slide').hide();
			content.find('.content_' + index).fadeIn(200);
			content.find('.content_' + index + ' .heading--sub').css({left: '-5px'}).animate({
				left: 0
			}, {duration: 500});
			content.find('.content_' + index + ' .text--medium').css({left: '-5px'}).animate({
				left: 0
			}, {duration: 500});
		}
	}

	function prevSlide() {
		var index = slider.find('.active').data('index');
		if (!$(slider.find('*')).is(':animated')) {
			slider.stop().find('img:last-child').prependTo(slider).css({marginLeft: '-120%'}).animate({
				marginLeft: 0
			}, {
				duration: 600, complete: function () {
					slider.find('.active').removeClass('active');
					$(this).addClass('active');
				}
			});
			next = index;
			index == 1 ? index = slideCount + 1 : index;
			console.log('a ' + index);
			next > slideCount ? next = 1 : next;
			waitings.find('img').hide();
			waitings.find('.slide_' + next).fadeIn(200);
			content.find('.content_slide').hide();
			content.find('.content_' + --index).fadeIn(200);
			content.find('.content_' + index + ' .heading--sub').css({left: '-5px'}).animate({
				left: 0
			}, {duration: 500});
			content.find('.content_' + index + ' .text--medium').css({left: '-5px'}).animate({
				left: 0
			}, {duration: 500});
		}
	}

	// ********************************************
	// Services animation and function
	// ********************************************
	var holder = $('.info');
	var overlay = $('.info_overlay');
	$('.info_block').on('click', function () {
		let _this = $(this);
		if (_this.hasClass('opened')) {
			overlay.stop().fadeOut();
			$("body").css("overflow", "auto");
			holder.find('.info_block').removeClass('opened').css({
				zIndex         : 2,
				transition     : 'none',
				position       : 'relative',
				left           : 'auto',
				transform      : 'rotate(0deg)',
				backgroundColor: 'white',
				borderColor    : '#e6e6e6'
			});
			$('.info_text').hide();
			return false;
		}
		if (window.innerWidth < 700) return false;
		holder.find('.info_block').addClass('opened').animate({opacity: 0}, {
			duration: 200, complete: function () {
				holder.find('.info_block').css({
					opacity   : 1,
					transition: 'transform .3s ease',
					position  : 'absolute',
					left      : 0,
					transform : 'rotate(5deg)'
				});
				_this.css({
					zIndex         : 10,
					transform      : 'rotate(0deg)',
					backgroundColor: '#F7F7F7',
					borderColor    : 'transparent'
				});
			}
		});
		$('html, body').animate({
			scrollTop: $(".s--info").offset().top + 15
		}, {duration : 200});
		overlay.fadeIn();
		$('.close_info').delay(300).fadeIn(300);
		$('.info_' + _this.data('index')).delay(200).fadeIn(300);
	});

	$(overlay).on('click', function () {
		$(this).stop().fadeOut();
		holder.find('.info_block').removeClass('opened').css({
			zIndex         : 2,
			transition     : 'none',
			position       : 'relative',
			left           : 'auto',
			transform      : 'rotate(0deg)',
			backgroundColor: 'white',
			borderColor    : '#e6e6e6'
		});
		$('.info_text').hide();
		$('.close_info').fadeOut(300);
	});

	$('.close_info').on('click', function () {
		$(this).stop().fadeOut();
		overlay.stop().fadeOut();
		holder.find('.info_block').removeClass('opened').css({
			zIndex         : 2,
			transition     : 'none',
			position       : 'relative',
			left           : 'auto',
			transform      : 'rotate(0deg)',
			backgroundColor: 'white',
			borderColor    : '#e6e6e6'
		});
		$('.info_text').hide();
	});


	// ********************************************
	// Services animation and function for mobile devices
	// ********************************************
	$('.info_block').on('click', function () {
		if (window.innerWidth > 700) return false;
		$.each($('.info_text'), function (index, value) {
			if ($(this).css('display') == 'block') $(this).slideUp();
		});
		var active = $('.info_' + $(this).data('index'));
		active.css('display') == 'block' ? active.slideUp() : active.slideDown();
	});

	// ********************************************
	// testimonial function
	// ********************************************
	var testimonies = $('.testimony_slider');
	var testimonyCount = $('.testimony').length;
	var testimonySpeed = 7000;
	$('.testimony_progress .number_next').text('0' + testimonyCount);

	$('.testimony_1').addClass('active');
	progressBar();
	displayNumbers();

	if (testimonies.length > 0) {
		var testimonyTimer = setInterval(function () {
			nextTestimony();
			progressBar();
		}, testimonySpeed);
	}

	function progressBar() {
		var calcWidth = (100 / testimonyCount) * parseInt(testimonies.find('.active').data('index'));
		$('.testimony_progress .fill').animate({width: calcWidth + '%', marginLeft: 0}, {duration: 300});
	}

	function nextTestimony(add = 1) {
		var index = testimonies.find('.active').data('index');
		testimonies.find('.active').removeClass('active');
		index == testimonyCount & add >= 1 ? index = 0 : index;
		index == 1 & add <= -1 ? index = testimonyCount + 1 : index;
		testimonies.find('.testimony_' + (index += add)).addClass('active');
		displayNumbers();
		testimonies.find('.active .text').css({left: '-5px', opacity: 0}).animate({
			left   : 0,
			opacity: 1
		}, {duration: 500});
		testimonies.find('.active .testimony__header').css({left: '-5px', opacity: 0}).animate({
			left   : 0,
			opacity: 1
		}, {duration: 500});
	}

	function displayNumbers() {
		var current = testimonies.find('.active').data('index');
		$('.testimony_progress .number_prev').text('0' + current);
	}

	$('.btn_testimony').on('click', function () {
		var add = parseInt($(this).data('add'));
		nextTestimony(add);
		progressBar();
		clearInterval(testimonyTimer);
		testimonyTimer = setInterval(function () {
			nextTestimony();
			progressBar();
		}, testimonySpeed);
	});

	// horizontal scroll
	var scrollBox = document.getElementById('scrollBox');
	if($('.scroll_box').length > 0){
		var overflowed = parseInt(scrollBox.scrollWidth) - parseInt($(scrollBox).width());
		var margin = parseInt(($(window).height() - $('.s--scroll_box .holder').height())/2);
		$('.s--scroll_box .holder').css({'top' : margin});
		if(overflowed > 0 && $(window).width() > 950) {
			$('.s--scroll_box').css({height: ( $(scrollBox).height() + overflowed + 155 + margin) + 'px'});
			(function () {
				var moveOn = function (type, name, obj) {
					var obj = obj || window;
					var running = false;
					var func = function () {
						if (running) {
							return;
						}
						running = true;
						requestAnimationFrame(function () {
							obj.dispatchEvent(new CustomEvent(name));
							running = false;
						});
					};
					obj.addEventListener(type, func);
				};

				moveOn("scroll", "optimizedScroll");
			})();

			window.addEventListener("optimizedScroll", function () {
				var scrollBox_top = parseInt($('.s--scroll_box').offset().top);
				var countedScroll = parseInt(window.pageYOffset - scrollBox_top + margin);
				if (window.pageYOffset >= scrollBox_top-margin && window.pageYOffset <= scrollBox_top + (overflowed + $(window).width() * .08) - margin) {
					scrollBox.style.transform = "translateX(-" + countedScroll + "px)";
				}
			})
		}
		else{
			scrollBox.css({"position" : 'relative'});
		}
	}

});