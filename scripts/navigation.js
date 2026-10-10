const menuButton = document.getElementById('menu-button');
const siteNav = document.getElementById('site-nav');

function setMenu(isOpen) {
    siteNav.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuButton.textContent = isOpen ? '✕' : '☰';
}

menuButton.addEventListener('click', () => {
    setMenu(!siteNav.classList.contains('open'));
});

// ---Extra items---

// Close the menu after choosing a section
siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        setMenu(false);
    }
});

// Close the menu with the Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) {
        setMenu(false);
        menuButton.focus();
    }
});

// Reset the menu when the screen grows to the large layout
window.matchMedia('(min-width: 900px)').addEventListener('change', (event) => {
    if (event.matches) {
        setMenu(false);
    }
});
