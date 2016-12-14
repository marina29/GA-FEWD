var trip = [
  {
    city: "London",
    country: "UK",
    photo: "http://s3.evcdn.com/images/block/I0-001/024/126/410-9.jpeg_/waset-london-2017-conference-10.jpeg"
  },
  {
    city: "Budapest",
    country: "Hungary",
    photo: "http://s4.evcdn.com/images/block/I0-001/034/301/859-2.jpeg_/waset-budapest-2017-conference-59.jpeg"
  },
  {
    city: "Lisbon",
    country: "Portugal",
    photo: "http://s2.evcdn.com/images/block/I0-001/033/766/357-7.jpeg_/waset-lisbon-2017-conference-57.jpeg"
  }
];

// CAN DO IT THIS WAY...

// $("button#first").on("click", function() {
//   console.log("1 has been clicked");
//   $("h1").text(trip[0]["city"]+", "+trip[0]["country"]);
//   $("img").attr("src", trip[0]["photo"]);
// });

// $("button#second").on("click", function() {
//   console.log("2 has been clicked");
//   $("h1").text(trip[1]["city"]+", "+trip[1]["country"]);
//   $("img").attr("src", trip[1]["photo"]);
// });

// $("button#third").on("click", function() {
//   console.log("3 has been clicked");
//   $("h1").text(trip[2]["city"]+", "+trip[2]["country"]);
//   $("img").attr("src", trip[2]["photo"]);
// });

// OR DO IT THIS WAY - EASIER - MORE GENERAL WITH ANY NUMBER...

var changeStop = function(number) {
  var city = trip[number]["city"];
  var country = trip[number]["country"];
  $("h1").text(city + ", " + country);
  $("img").attr("src", trip[number]["photo"]);
};

$("button#first").on("click", function() {
  changeStop(0);
});
$("button#second").on("click", function() {
  changeStop(1);
});
$("button#third").on("click", function() {
  changeStop(2);
});