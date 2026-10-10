const products = [
    {
        id: 1,
        name: "iPad Air 13-inch (M4)",
        image: "images/ipad-1.webp",
        alt: "My iPad Air 13-inch",
        why: "I study on it. The 13-inch screen is large enough to read and take notes comfortably during my hard courses.",
        recommendation: "Choose it if you study a lot and want a large screen that is easier to carry than a laptop."
    },
    {
        id: 2,
        name: "MacBook Air",
        image: "images/mac-2.webp",
        alt: "My MacBook Air",
        why: "I work for a remote company, so I use it every day. It gives me a full computer that I can take anywhere.",
        recommendation: "Choose it if you work or study from home and need a real keyboard and a complete computer."
    },
    {
        id: 3,
        name: "iPhone 17 Pro",
        image: "images/iphone.webp",
        alt: "My iPhone 17 Pro",
        why: "I use it all day, and I take the pictures of this website with it.",
        recommendation: "Choose it if pictures and videos matter to you and you want one phone for everything."
    }
];

const productList = document.getElementById("product-list");
const favoriteMessage = document.getElementById("favorite-message");

let favoriteName = getFavorite();

function createProductCard(product) {
    const isFavorite = product.name === favoriteName;

    return `
        <article class="card product-card">
            <img src="${product.image}" alt="${product.alt}" width="800" height="600" loading="lazy">
            <h2>${product.name}</h2>
            <h3>Why I chose it</h3>
            <p>${product.why}</p>
            <h3>My recommendation</h3>
            <p>${product.recommendation}</p>
            <button class="btn" type="button" data-id="${product.id}" aria-pressed="${isFavorite}">
                ${isFavorite ? "Your favorite" : "Mark as favorite"}
            </button>
        </article>
    `;
}

function renderProducts() {
    productList.innerHTML = products.map(createProductCard).join("");

    favoriteMessage.textContent = favoriteName
        ? `Your favorite is the ${favoriteName}. It will be selected for you in the contact form.`
        : "Choose one device as your favorite and this browser will remember it.";
}

productList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");

    if (!button) {
        return;
    }

    const product = products.find((item) => item.id === Number(button.dataset.id));

    favoriteName = product.name === favoriteName ? null : product.name;
    saveFavorite(favoriteName);
    renderProducts();
    productList.querySelector(`button[data-id="${product.id}"]`).focus();
});

renderProducts();