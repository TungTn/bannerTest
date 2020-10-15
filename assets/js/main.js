$(function(){
	setTimeout(function() {
		$(".wrapper__box__item--item2 p").addClass("fadeOut");
		$(".wrapper__box__item--item2 span").addClass("fadeTopBottom"); 
	},3000);
	setTimeout(function() {
		$(".wrapper__box__item--item3 p").addClass("fadeOut");
		$(".wrapper__box__item--item3 span").addClass("fadeTopBottomN"); 
	},6000);
	setTimeout(function() {
		$(".wrapper__box__item--item4 p").addClass("fadeOut");
	},9000);
});