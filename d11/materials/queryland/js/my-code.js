console.log("Hello!");


// var title = prompt("What do you want to name this page?")

// $("h1").text(title);



// Note: inside the quotes next to the $ is a CSS selector
// $("css selector").text("insert string")
// .text means we are changing the text


// The following code sets whatever is in the input as title
// var title = $("input").val();
// $("h1").text(title);


$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
  $("h1").css("background-color", "yellow");
});

$("p").css("color", "red");

