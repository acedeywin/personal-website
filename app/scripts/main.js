$(document).ready(() => {

	const $hidePics = $('.show-pics');

	$('.green-bg').css('background-color', 'rgb(128, 0, 51)');
	
    //Hidden navigation toggle functionalities
	$('.menu').click(() => {
		$('.menu').toggleClass('active');
		$('.overlay').toggleClass('menu-open');
		$hidePics.toggleClass('hide');
	});

	$('.nav .link').click(() => {
		$('.menu').removeClass('active');
		$('.overlay').removeClass('menu-open');
		$hidePics.show();
	});

});