// Collapsible navigation menu function
function toggleNav() {
  let nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

// Close the menu after click
function closeMenu() {
  var nav = document.querySelector('.nav');
  nav.classList.remove('open');
}