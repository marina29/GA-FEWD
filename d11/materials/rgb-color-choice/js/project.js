console.log("Is this working?");


// $("a#color-button").on("click", function() {
// 	console.log("I was clicked");

// 	var r = $("#red").val();
// 	console.log(r);

// 	var g = $("#green").val();
// 	console.log(g);

// 	var b = $("#blue").val();
// 	console.log(b);


// 	var rgb = "rgb(" + r + "," + g + "," + b + ")";
// 	console.log(rgb);


// 	$("#wrapper").css("background-color", rgb);
// 	$("p#colorful-text").text(rgb);
// });

$("#color-button").on("click", function() {
	var r = Math.round(Math.random() * 256);
	var g = Math.round(Math.random() * 256);
	var b = Math.round(Math.random() * 256);
	$("#wrapper").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
	$("#colorful-text").text("rgb(" + r + ", " + g + ", " + b + ")");
});