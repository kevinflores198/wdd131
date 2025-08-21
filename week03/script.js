let firstName = 'Antonia';
let lastName = 'Francesca';

console.log(fullName)

// how i did, it is not preferred.
function fullName(first, last) {
    full = f(first + ' ' + last);
    return full;
}

//the example
function fullName(first, last) {
  return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
}