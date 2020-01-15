// When the function factButton is called...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and the length of the facts array
	var number = Math.floor((Math.random() * booFacts.length));
	// We then display the fact with the index of the number generated in the div with id factText.
	$("#factText").text(booFacts[number])
})

// This array contains the facts about Boo that we will pull from.
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// We change the funText color to pink.
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// The funText color changes to orange
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// We change the funText color to green.
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Grow box by 35px height and width.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Shrink the box by 35px height and weight.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})