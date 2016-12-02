console.log("This is working");



$(".inlineblock").on("click", function() {
	console.log("Just been clicked");
	
	$("nav").slideToggle();

	$("a").css("display", "block");
	$("a").css("padding", "20px 0px");
	$("a").css("text-align", "center");

});

	
