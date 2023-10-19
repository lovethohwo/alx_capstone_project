function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const email = emailInput.value;
  
    if (validateEmail(email)) {
      
      // Perform other actions if the email is valid
    } else {
      alert("Invalid email address");
      // Perform other actions if the email is invalid
    }
  });