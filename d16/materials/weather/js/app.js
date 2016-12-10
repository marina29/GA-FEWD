
$("button").on("click", function() {
	console.log("button clicked");

	var city = $("input").val();
	console.log(city);

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&apikey=0111c768ca6a305b23486961c6b9c5af", function(data) {
		
		$("span.temperature").text(data["main"]["temp"]);
		$("img.icon").attr("src","http://openweathermap.org/img/w/"+ data["weather"][0]["icon"] + ".png");
	});
});


