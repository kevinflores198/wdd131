
const press = document.querySelector('#press');
const text = document.querySelector('#text');

let contador = 1;


press.onclick = () => {
    press.textContent = "Let's do it again!";
    text.textContent = `${contador} clicks so far`;
    contador += 1;
};
