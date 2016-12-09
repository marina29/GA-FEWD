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

$("#ny").on("click", function() {
	$(".capital").text(ny["capital"]);
	$(".governor").text(ny["governor"]);
	$("h1").text(ny["name"]);
	$("#first-senator").text(ny["usSenators"]);
	$("#second-senator").text(ny["usSenators"]);
});

$("#ct").on("click", function() {
	$(".capital").text(ct["capital"]);
	$(".governor").text(ct["governor"]);
	$("h1").text(ct["name"]);
	$("#first-senator").text(ct["usSenators"]);
	$("#second-senator").text(ct["usSenators"]);
});