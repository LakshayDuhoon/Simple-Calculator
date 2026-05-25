const toggelBtn = document.querySelector('.toggle-btn');
const circle = document.querySelector('.circle');
const body = document.body;

let position = 1;

toggelBtn.addEventListener('click', () => {

    position++;

    if(position > 3){
        position = 1;
    }

    /* move circle */

    if(position === 1){
        circle.style.left = "3px";
    }

    else if(position === 2){
        circle.style.left = "26px";
    }

    else if(position === 3){
        circle.style.left = "50px";
    }

    /* remove old themes */

    body.classList.remove('theme-1');
    body.classList.remove('theme-2');
    body.classList.remove('theme-3');

    /* add current theme */

    body.classList.add(`theme-${position}`);

});

const numbers = document.querySelectorAll('.key');
const del = document.querySelector('.delete');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const screen = document.querySelector('.screen');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        screen.value += number.innerText;
    })
})

plus.addEventListener('click', () => {
    screen.value += "+";
})
minus.addEventListener('click', () => {
    screen.value += "-";
})
multiply.addEventListener('click', () => {
    screen.value += "*";
})
divide.addEventListener('click', () => {
    screen.value += "/";
})

reset.addEventListener('click', () => {
    screen.value = '';
})

del.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
})

equal.addEventListener('click', () => {
    screen.value = eval(screen.value);
})