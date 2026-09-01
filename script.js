const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks?.classList.remove('open')));
document.querySelectorAll('.amounts button').forEach(button => button.addEventListener('click', () => { const value = button.textContent.replace('$','').trim(); const input = document.querySelector('#custom'); if (input && value !== 'Other') input.value = value; if (input && value === 'Other') input.focus(); }));

const contactModal = document.querySelector('#contactModal');
const openContactForm = document.querySelector('#openContactForm');
const closeContactModal = () => {
  if (!contactModal) return;
  contactModal.classList.remove('open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};
const openContactModal = () => {
  if (!contactModal) return;
  contactModal.classList.add('open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setTimeout(() => document.querySelector('#contactName')?.focus(), 50);
};
if (openContactForm) openContactForm.addEventListener('click', openContactModal);
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeContactModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeContactModal(); });