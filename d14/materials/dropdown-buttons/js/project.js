console.log("This is working");

$("button").on("click", function() {
	var selected = $(this);
	selected.siblings("nav").toggleClass("open");
})