
	const myMenu = () => {	
		const menu = document.querySelector('.menu'),
			  hidePics = document.querySelector('.show-pics'),
			  overlay = document.querySelector('.overlay');
			
		menu.classList.toggle('active');
		overlay.classList.toggle('menu-open');
		hidePics.classList.toggle('hide')
	  };

	  const myNav = () => {
		const menu = document.querySelector('.menu');	
		menu.classList.remove('active');
	  };

	  const myLink = () => {
		const overlay = document.querySelector('.overlay');
		overlay.classList.remove('menu-open');
	  };




$(() => {

	$(window).resize(function () {
		var viewportWidth = $(window).width();
		if (viewportWidth < 500) {
				$(".view").removeClass("header").addClass("portfolio");
		}else{
			$(".view").removeClass("portfolio").addClass("header");
		}
	});

});  




