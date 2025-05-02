//form
  document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual submission

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const location = this.location.value.trim();
    const message = this.message.value.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!location) {
      alert("Please enter your location.");
      return;
    }
    if (!message) {
      alert("Please enter your message.");
      return;
    }

    alert("Thank you! Your feedback has been submitted.");
    this.reset(); // Optional: clear form after submission
  });
