/*Script.js*/

//------------------------
//Helper Functions
//------------------------
function drawSquare(length) {
    let square = document.createElement("div");
    square.classList.add('square');
    square.style.width = length+'px';
    square.style.height = length+'px';
    wrapper.appendChild(square);
}

function drawArray(length, sqrs)  {
    for(let i=0; i<sqrs; i++)   {
        for(let j=0; j<sqrs; j++)   {
            drawSquare(length);
        }
    }
    squares = document.querySelectorAll('.square');
    squares.forEach(div => div.addEventListener('mouseover', 
            () => {div.classList.add('shade');}));
}

function resetArray()   {
    squares.forEach(div => div.classList.remove('shade'));
}

function setArray() {
    let tmp = parseInt(prompt('Type in number of squares (between 1-100)'));
    if(isNaN(tmp) || tmp > 100 || tmp < 1){
         alert('Invalid input');
         return;
    }
    arraySquares=tmp;
    squares.forEach(div => div.remove());
    drawArray(drawArray((arrayLength/arraySquares),arraySquares));
}

//------------------------
//User interface globals and events
//------------------------
const wrapper = document.querySelector('#wrapper');
const btnReset = document.querySelector('#btnReset');
const btnSet = document.querySelector('#btnSet');
const arrayLength = 600;    //default container 600px
let arraySquares = 16, squares;
//Draw default grid
drawArray((arrayLength/arraySquares),arraySquares);

btnReset.addEventListener('click',() => resetArray());
btnSet.addEventListener('click',() => setArray());

