const today = new Date();
currentyear.innerHTML= today.getFullYear();

const lastMod = new Date(document.lastModified);
lastmodified.innerHTML = lastMod;

const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
};

lastmodified.innerHTML = "Last Modification: " + lastMod.toLocaleString("en-US", options);

const main = document.querySelector('.navigation');
const hamb = document.querySelector('#burger');

hamb.addEventListener('click', () => {
    main.classList.toggle('showing');
    hamb.classList.toggle('active');
});

