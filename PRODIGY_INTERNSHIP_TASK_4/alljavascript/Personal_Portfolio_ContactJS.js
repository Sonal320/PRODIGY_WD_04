// Highlight active navbar link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Social icons click demo
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🚀 Redirecting to " + icon.querySelector("i").classList[1] + " profile!");
  });
});