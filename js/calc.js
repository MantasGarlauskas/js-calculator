const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

const firstNumber = document.getElementById('first_number');
const action = document.getElementById('action');
const secondNumber = document.getElementById('second_number');
const result = document.querySelector('.result');
const button = document.querySelector('.button');

result.innerHTML = ''

button.addEventListener('click', (e) => {
    result.innerHTML = matematika[action.value](Number(firstNumber.value), Number(secondNumber.value))
    e.preventDefault()
})