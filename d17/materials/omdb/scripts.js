
$("button").on("click", function() {
	console.log("button clicked")
	var movie = $("input").val();
	console.log(movie);

	$.getJSON("http://www.omdbapi.com/?t="+movie, function(omdb) {
		console.log(omdb["Rated"]);
		var title = omdb["Title"];
		$("h1.title").text(title);
		$("h4.year").text(omdb["Year"]);
		$("img.poster").attr("src", omdb["Poster"]);
		$("p.plot").text(omdb["Plot"]);

		var liThatIMade = $("<li>"+title+"</li>");
		$("ul.search-history").append(liThatIMade);
		});
});

$("ul").on("click", function(event) {
		var selected = $(event.target);
		console.log(selected.text());
		
		$(this).text(selected);
		
		
		// $.getJSON("http://www.omdbapi.com/?t="+selected, function(omdb) {

		// 	var title = omdb["Title"];
		// 	$("h1.title").text(title);
		// 	$("h4.year").text(omdb["Year"]);
		// 	$("img.poster").attr("src", omdb["Poster"]);
		// 	$("p.plot").text(omdb["Plot"]);

		// 	var liThatIMade = $("<li>"+title+"</li>");
		// 	$("ul.search-history").append(liThatIMade);
		// 	});

	})

// javascript
// $("ul").on("click", function(event) {
//   // $(event.target) is the li that was clicked
//   // Whereas $(this) is the ul
// });