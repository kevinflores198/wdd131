
const WHATSAPP_NUMBER = "5491123941362";

const form = document.getElementById("question-form");
const nameInput = document.getElementById("name");
const deviceSelect = document.getElementById("device");
const questionInput = document.getElementById("question");
const sendButton = document.getElementById("send-button");
const list = document.getElementById("question-list");
const countText = document.getElementById("saved-count");
const message = document.getElementById("form-message");

let questions = getQuestions();
const favoriteDevice = getFavorite();

if (favoriteDevice) {
    deviceSelect.value = favoriteDevice;
}

function showMessage(text) {
    message.textContent = text;
}

function createQuestionItem(item) {
    const li = document.createElement("li");
    li.classList.add("question-item");

    const meta = document.createElement("p");
    meta.classList.add("question-meta");
    meta.textContent = `${item.name} asked about ${item.device} on ${item.date}`;

    const text = document.createElement("p");
    text.textContent = `${item.question}`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.id = item.id;
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete question: ${item.question}`);

    li.append(meta, text, deleteButton);
    return li;
}

function renderQuestions() {
    list.replaceChildren();

    if (questions.length === 0) {
        const empty = document.createElement("li");
        empty.textContent = "You have no saved questions yet.";
        list.append(empty);
    } else {
        [...questions].reverse().forEach((item) => {
            list.append(createQuestionItem(item));
        });
    }

    countText.textContent = `You have ${countLabel(questions.length)}.`;
}

function buildWhatsAppLink() {
    const text = `Hi Kevin! My name is ${nameInput.value.trim()}. I have a question about ${deviceSelect.value}: ${questionInput.value.trim()}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const questionText = questionInput.value.trim();

    if (questionText === "") {
        showMessage("Please write your question first.");
        questionInput.focus();
        return;
    }

    questions.push({
        id: Date.now(),
        name: nameInput.value.trim(),
        device: deviceSelect.value,
        question: questionText,
        date: new Date().toLocaleDateString("en-US")
    });

    saveQuestions(questions);
    renderQuestions();
    questionInput.value = "";
    showMessage("Question saved in this browser.");
    questionInput.focus();
});

sendButton.addEventListener("click", () => {
    if (!form.reportValidity() || questionInput.value.trim() === "") {
        showMessage("Please complete the form before sending.");
        return;
    }

    if (WHATSAPP_NUMBER === "") {
        showMessage("The WhatsApp number is not set yet.");
        return;
    }

    window.open(buildWhatsAppLink(), "_blank", "noopener");
    showMessage("WhatsApp is open. Press send there to deliver your question.");
});

// Delete a saved question
list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");

    if (!button) {
        return;
    }

    questions = questions.filter((item) => item.id !== Number(button.dataset.id));
    saveQuestions(questions);
    renderQuestions();
    showMessage("Question deleted.");
});

renderQuestions();