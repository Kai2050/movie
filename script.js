function simulatePayment() {
  const charity = document.getElementById("charity").value;
  const confirmation = document.getElementById("confirmation");

  if (!charity || charity === "Select a charity") {
    confirmation.style.color = "red";
    confirmation.textContent = "Please select a charity before renting.";
  } else {
    confirmation.style.color = "#00ff00";
    confirmation.textContent = `Thank you! You've rented the film and chosen to support: ${charity}.`;
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
