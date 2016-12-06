console.log("this is working");

var current = 0;

$("#right").on("click", function() {
	console.log("Right clicked");
	var selectedimg = $("img").next(".selected" ).attr();
	$(".selected").attr("src");
});

