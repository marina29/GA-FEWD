console.log("This is working");

$("button").on("click", function() {
	var selected = $(this);
	selected.siblings("nav").toggleClass("open");
});

$("button").on("blur", function() {
	var selected = $(this);
	selected.siblings("nav").removeClass("open");
})