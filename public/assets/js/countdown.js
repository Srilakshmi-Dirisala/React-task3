
// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2022 21:13:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " <span> Days </span> ";
  document.getElementById("hours").innerHTML = hours + " <span> Hours </span> ";
  document.getElementById("minutes").innerHTML = minutes + " <span> Minutes </span> ";
  document.getElementById("seconds").innerHTML = seconds + " <span> Seconds </span>";
    
}, 1000);

// Set the date for Mint
var countDownDateMint = new Date("Sep 10, 2022 21:13:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDateMint - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("daysMint").innerHTML = days + " <span> Days </span> ";
  document.getElementById("hoursMint").innerHTML = hours + " <span> Hours </span> ";
  document.getElementById("minutesMint").innerHTML = minutes + " <span> Minutes </span> ";
  document.getElementById("secondsMint").innerHTML = seconds + " <span> Seconds </span>";
    
}, 1000);