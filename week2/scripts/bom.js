const inputAction = document.querySelector('.#favChap');
const buttonAction = document.querySelector('button');
const listAction = document.querySelector('_');

const listCreated = document.createElement('li');
const buttonDelete = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the input value.
listAction.textContent = input.valiue;

buttonAction.textContent = '❌';

// Append the delete button to the li element.
listCreated.appendChild(buttonDelete);

// Append the li element variable to the unordered list in your HTML.
listAction.append(listCreated);