// Countdown Timer
const examDate = new Date('2025-03-05T00:00:00');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = examDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Exams have started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
}

setInterval(updateCountdown, 1000);

// Local Storage for Papers
const uploadForm = document.getElementById('upload-form');
const uploadedPapersList = document.getElementById('uploaded-papers');
const papers = JSON.parse(localStorage.getItem('papers')) || [];

function displayPapers() {
  uploadedPapersList.innerHTML = papers.map((paper) => `
    <li>
      <div>
        <strong>${paper.title}</strong> - ${paper.subject}
      </div>
      <a href="${paper.file}" target="_blank">View</a>
    </li>
  `).join('');
}

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;
  const file = document.getElementById('file').files[0];

  if (!title || !subject || !file) {
    alert('Please fill all fields!');
    return;
  }

  const fileURL = URL.createObjectURL(file);

  papers.push({ title, subject, file: fileURL });
  localStorage.setItem('papers', JSON.stringify(papers));
  displayPapers();

  uploadForm.reset();
});

displayPapers();
// Upload Form and Display Logic
const uploadForm = document.getElementById('upload-form');
const uploadedPapersList = document.getElementById('uploaded-papers');

// Fetch existing papers from localStorage
const papers = JSON.parse(localStorage.getItem('papers')) || [];

// Function to display papers
function displayPapers() {
  uploadedPapersList.innerHTML = papers.map((paper, index) => `
    <li>
      <div>
        <strong>${paper.title}</strong> - ${paper.subject}
      </div>
      <a href="${paper.file}" target="_blank">View</a>
    </li>
  `).join('');
}

// Add Paper to Local Storage and Display
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const subject = document.getElementById('subject').value;
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  // Validate fields
  if (!title || !subject || !file) {
    alert('Please fill all fields and select a file!');
    return;
  }

  // Create URL for the file
  const fileURL = URL.createObjectURL(file);

  // Add to papers array and save in localStorage
  papers.push({ title, subject, file: fileURL });
  localStorage.setItem('papers', JSON.stringify(papers));

  // Reset form and refresh list
  uploadForm.reset();
  displayPapers();
});

// Initialize display on page load
displayPapers();
