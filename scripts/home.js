const savedMessage = document.getElementById("saved-message");
const total = getQuestions().length;

if (total > 0) {
    savedMessage.textContent = `You have ${countLabel(total)}. Continue here to read them or to ask another one.`;
}