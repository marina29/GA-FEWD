console.log("This is a functioning page");


$("#click-me").on("click", function() {
	var age = $("input#age").val();
	console.log(age);

	var maxage = $("input#max-age").val();
	console.log(maxage);

	var numperday = $("input#num-per-day").val();
	console.log(numperday);

	
	var daysLeft = (parseFloat(maxage) - parseFloat(age)) * 365;
	console.log(daysLeft);

	var total = (daysLeft*numperday);
	console.log(total);


	var item = $("select#item").val();
	console.log(item);

	$("span#solution").text(total.toLocaleString());
	$("span#drink").text(item);

	});