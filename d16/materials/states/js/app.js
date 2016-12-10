var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}

$("button#ny").on("click", function() {
	console.log("button clicked");
	$("h1").text(ny["name"]);
	$("h1").css("color", "rgb(129,216,208)");
	
	$("span.capital").text(ny["capital"]);
	$("span.governor").text(ny["governor"]);
	
	$("li#first-senator").text(ny["usSenators"][0]);
	$("li#second-senator").text(ny["usSenators"][1]);
});

$("button#ct").on("click", function() {
	console.log("button clicked");
	
	$("h1").text(ct["name"]);
	$("h1").css("color", "rgb(129,216,208)");
	
	$("span.capital").text(ct["capital"]);
	$("span.governor").text(ct["governor"]);
	
	$("li#first-senator").text(ct["usSenators"][0]);
	$("li#second-senator").text(ct["usSenators"][1]);
});