// Handling the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Message sent successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  
    // Clear the form
    document.getElementById("contact-form").reset();
  });
  