const closeNavMenuBtn = document.querySelector('.close-mobile-menu-btn');
const overlay = document.querySelector('.overlay');
const hamburgerBtn = document.querySelector('.hamburger-menu');
const body = document.querySelector('.body');
const navWrap = document.querySelector('.nav-menu-wrap');
const mobileContactLink = document.querySelector('.mobile-contact-link');
const catalogueLink = document.querySelector('.catalouge-link');
const mobileCatelogueLink = document.querySelector('.mobile-catalogue-link');

navWrap.addEventListener('click', (e) => e.stopPropagation());

function closeMenu() {
  overlay.removeEventListener('keydown', handleModalKeydown);
  overlay.style.display = 'none';
  body.style.overflowY = 'visible';
}

function openMenu() {
  overlay.style.display = 'block';
  body.style.overflowY = 'hidden';
  closeNavMenuBtn.focus();
  overlay.addEventListener('keydown', handleModalKeydown);
}

closeNavMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
mobileContactLink.addEventListener('click', closeMenu);
hamburgerBtn.addEventListener('click', openMenu);

closeNavMenuBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    closeMenu();

    setTimeout(() => {
      // Restore focus to the element that had focus before the modal was opened
      // allow time to close modal
      if (hamburgerBtn) {
        hamburgerBtn.focus();
      }
    }, 0);
  }
});

function handleModalKeydown(event) {
  if (event.key === 'Tab') {
    const focusableElements = overlay.querySelectorAll(
      'a[href], button, textarea, input, select'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      // Shift + Tab on the first focusable element, set focus to the last
      event.preventDefault();
      lastFocusable.focus();
    } else if (!event.shiftKey && document.activeElement === lastFocusable) {
      // Tab on the last focusable element, set focus to the first
      event.preventDefault();
      closeNavMenuBtn.focus();
    }
  }
}
