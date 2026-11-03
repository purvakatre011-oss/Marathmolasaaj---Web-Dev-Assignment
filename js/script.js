document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀ Light mode' : '☾ Dark mode';
  });
}

// Filter Catalog Items
function filterCatalog(category, buttonEl) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttonEl.classList.add('active');

  const cards = document.querySelectorAll('#catalogGrid .product-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search Catalog Items
function searchCatalog() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('#catalogGrid .product-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    card.style.display = (title.includes(query) || desc.includes(query)) ? 'flex' : 'none';
  });
}

// Lightbox Modal
function openLightbox(imgSrc, captionText) {
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxCaption').textContent = captionText;
  lightbox.removeAttribute('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').setAttribute('hidden', 'true');
}

function openProductModal(name, desc, price, imageSrc) {
  openLightbox(imageSrc, `${name} — ${price} | ${desc}`);
}

// Contact Form Handler & WhatsApp Redirection
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('fname').value;
  const phone = document.getElementById('fphone').value;
  const item = document.getElementById('fitem').value;
  const msg = document.getElementById('fmsg').value;

  document.getElementById('formStatus').classList.add('active');

  const whatsappMsg = `Hello Marathmola Saaj!%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Item of Interest:* ${encodeURIComponent(item)}%0A*Message:* ${encodeURIComponent(msg)}`;
  
  setTimeout(() => {
    window.open(`https://wa.me/917498587628?text=${whatsappMsg}`, '_blank');
  }, 800);
}