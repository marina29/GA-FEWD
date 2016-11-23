console.log("This is functioning");


$("button").on("click", function() {
	var celsius = $("input").val()
	console.log(celsius)
	var farenheit = (celsius * 1.8) + 32
	console.log(farenheit)
	$("#converted").text(farenheit)
});