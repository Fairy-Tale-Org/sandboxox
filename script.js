// Get the necessary DOM elements
const symbolContainer = document.querySelector('.symbol-container');
const symbolX = document.querySelector('.symbol.x');
const symbolO = document.querySelector('.symbol.o');
const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const closeButton = document.querySelector('.close');

// Add event listener for popup button click
popupBtn.addEventListener('click', () => {
  popup.classList.add('open');
});

// Add event listener for submit button click
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value;

  // Validate email address using regular expression
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Send POST request to server with email data
  fetch('https://example.com/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Thank you for submitting your email!`);
      emailInput.value = '';
      popup.classList.remove('open');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting your email. Please try again later.');
    });
});

// Set interval to alternate symbols every 1.5 seconds
setInterval(() => {
  if (symbolX.classList.contains('visible')) {
    symbolX.classList.remove('visible');
    symbolO.classList.add('visible');
  } else {
    symbolO.classList.remove('visible');
    symbolX.classList.add('visible');
  }
}, 1500);

// Close button
closeButton.addEventListener('click', () => {
  popup.classList.remove('open');

});
