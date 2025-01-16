
const form = document.getElementById('signup-form');
const thankYouMessage = document.getElementById('thank-you-message');


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  
  form.style.display = 'none';
  thankYouMessage.classList.remove('hidden');
});
