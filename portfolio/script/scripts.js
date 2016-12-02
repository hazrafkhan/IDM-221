// Smooth Scrolling Script
$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	      	scrollTop: $(hash).offset().top
	      }, 800, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	    });
	    } // End if
	});
	});

// Work Section Overflow Scrolling Script
// To add new work, copy the first work code, change 'hasstudio' to its ID name

// Work 1
function scroll1(){
	var topPos = document.getElementById('work1').offsetTop;
	document.getElementById('container').scrollTop = topPos-0;
}

// Work 2
function scroll2(){
	var topPos = document.getElementById('work2').offsetTop;
	document.getElementById('container').scrollTop = topPos-0;
}

// Work 3
function scroll3(){
	var topPos = document.getElementById('work3').offsetTop;
	document.getElementById('container').scrollTop = topPos-0;
}

// Work 4
function scroll4(){
	var topPos = document.getElementById('work4').offsetTop;
	document.getElementById('container').scrollTop = topPos-0;
}

// Work 5
function scroll5(){
	var topPos = document.getElementById('work5').offsetTop;
	document.getElementById('container').scrollTop = topPos-0;
}