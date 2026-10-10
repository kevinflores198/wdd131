const STORAGE_KEY = "handson-questions";

function getQuestions() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveQuestions(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function countLabel(total) {
    return `${total} saved ${total === 1 ? "question" : "questions"}`;
}

const FAVORITE_KEY = "handson-favorite";

function getFavorite() {
    return localStorage.getItem(FAVORITE_KEY);
}

function saveFavorite(name) {
    if (name === null) {
        localStorage.removeItem(FAVORITE_KEY);
    } else {
        localStorage.setItem(FAVORITE_KEY, name);
    }
}