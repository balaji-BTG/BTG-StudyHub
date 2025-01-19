// Countdown Timer for Exam
function updateCountdown() {
  const examDate = new Date('March 5, 2025 00:00:00').getTime(); // Exam Date
  const now = new Date().getTime();
  const distance = examDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  document.getElementById("countdown").innerHTML = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;

  // If the countdown is finished
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "EXAM TIME!";
  }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);
