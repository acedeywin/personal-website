
	const myMenu = () => {	
		const menu = document.querySelector('.menu'),
			  hidePics = document.querySelector('.show-pics'),
			  overlay = document.querySelector('.overlay');
			
		menu.classList.toggle('active');
		overlay.classList.toggle('menu-open');
		hidePics.classList.toggle('hide');
	  };

	  const myNav = () => {
		const menu = document.querySelector('.menu');	
		menu.classList.remove('active');

	  };

	  const myLink = () => {
		const overlay = document.querySelector('.overlay');
		overlay.classList.remove('menu-open');
	  };

// $(() => {

// 	const $hidePics = $('.show-pics');

// 	$('.green-bg').css('background-color', 'rgb(128, 0, 51)');
	
//     //Hidden navigation toggle functionalities
// 	$('.menu').click(() => {
// 		$('.menu').toggleClass('active');
// 		$('.overlay').toggleClass('menu-open');
// 		$hidePics.toggleClass('hide');
// 	});

// 	$('.nav .link').click(() => {
// 		$('.menu').removeClass('active');
// 		$('.overlay').removeClass('menu-open');
// 		$hidePics.show();
// 	});

// });  




