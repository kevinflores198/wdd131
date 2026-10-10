// --- Footer: año y última modificación ---
const currentyear = document.getElementById('currentyear');
const lastmodified = document.getElementById('lastmodified');

const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastMod = new Date(document.lastModified);
const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
};
lastmodified.innerHTML = "Last Modification: " + lastMod.toLocaleString("en-US", dateOptions);

const navMenu = document.querySelector('.navigation');
const hamb = document.querySelector('#burger');

hamb.addEventListener('click', () => {
    navMenu.classList.toggle('showing');
    hamb.classList.toggle('active');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 108536,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/St-George-Utah-Temple2.jpg"
    },
    {
        templeName: "Draper Utah",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 20",
        area: 58300,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Draper-Utah-Temple1.jpg"
    },
    {
        templeName: "Vernal Utah",
        location: "Vernal, Utah, United States",
        dedicated: "1997, November, 2",
        area: 33400,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Vernal-Utah-Temple2.jpg"
    }
];

const figureContainer = document.getElementById('figure-container');

function displayTemples(templeList) {
    figureContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const figure = document.createElement('figure');

        figure.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        figureContainer.appendChild(figure);
    });
}

function getDedicatedYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0]);
}

function filterTemples(filter) {
    switch (filter) {
        case "old":
            return temples.filter((temple) => getDedicatedYear(temple.dedicated) < 1900);
        case "new":
            return temples.filter((temple) => getDedicatedYear(temple.dedicated) > 2000);
        case "large":
            return temples.filter((temple) => temple.area > 90000);
        case "small":
            return temples.filter((temple) => temple.area < 10000);
        default:
            return temples;
    }
}

const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        displayTemples(filterTemples(filter));

        navMenu.classList.remove('showing');
        hamb.classList.remove('active');
    });
});

displayTemples(temples);