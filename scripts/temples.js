const today = new Date();
currentyear.innerHTML= today.getFullYear();

const lastMod = new Date(document.lastModified);
lastmodified.innerHTML = lastMod;

const main = document.querySelector('.navigation');
const hamb = document.querySelector('#menu');

hamb.addEventListener('click', () => {
    main.classList.toggle('showing');
    hamb.classList.toggle('active');
});