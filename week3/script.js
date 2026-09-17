// we define variable
let firstName = 'kevin';
let lastName = 'flores';

// we put it into a function, in that case an arrow function
const fullName = (first, last) => `${first} ${last}`;

// we import it to the HTML to show it by id
document.querySelector('#fullName').textContent = fullName(firstName, lastName);
