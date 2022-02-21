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
    e.preventDefault()
    result.innerHTML = `${firstNumber.value} ${action.value} ${secondNumber.value} = ${matematika[action.value](Number(firstNumber.value), Number(secondNumber.value))}`

})