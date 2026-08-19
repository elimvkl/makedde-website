const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks?.classList.remove('open')));
document.querySelectorAll('.amounts button').forEach(button => button.addEventListener('click', () => { const value = button.textContent.replace('$','').trim(); const input = document.querySelector('#custom'); if (input && value !== 'Other') input.value = value; if (input && value === 'Other') input.focus(); }));