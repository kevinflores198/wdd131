const inputAction = document.querySelector('#favchap');
const buttonAction = document.querySelector('button');
const listAction = document.querySelector('#list');

buttonAction.addEventListener('click', function () {

    if (inputAction.value != "") {

        const listCreated = document.createElement('li');
        const buttonDelete = document.createElement('button');

        // Populate the li element variable's textContent or innerHTML with the input value.
        listCreated.textContent = inputAction.value;

        buttonDelete.textContent = '❌';

        // Append the delete button to the li element.
        listCreated.appendChild(buttonDelete);

        // Append the li element variable to the unordered list in your HTML.
        listAction.append(listCreated);

        buttonDelete.addEventListener('click', function () {
            listAction.removeChild(listCreated);
            inputAction.focus();
        });
    }
});
