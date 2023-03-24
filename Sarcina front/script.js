let keys = [];
let repet = document.getElementById("repeat-keys");
const divs = document.querySelectorAll('.js');
const buttons = document.querySelectorAll('div');

buttons.forEach( div => {
  div.addEventListener('click', () => {
    div.style.backgroundColor = 'blue';
    setTimeout(() => {
      div.style.backgroundColor = 'green';
    }, 3000);
    setTimeout(() =>{
      div.style.backgroundColor = 'white';
    }, 60000);
  });
});


const displayBtn = document.querySelector('#repeat-keys');
displayBtn.addEventListener('click', () => {
const arrContent = keys.map((div) => div.textContent);
repet.textContent = "Tastele apasate: " + arrContent
console.log(arrContent);
});

function pushDivToArray(e) {
  var clickedDiv = e.target;
  keys.push(clickedDiv);
  console.log(keys);
}

divs.forEach((div) => {
  div.addEventListener('click', pushDivToArray);
});

function changeColorOfArray(backgroundColor,delay) {
  keys.forEach(function(div,index) {
    setTimeout(function(){
    div.style.backgroundColor = backgroundColor;
    }, delay * index);
  });
}


var colorButton = document.getElementById('display-btn');

colorButton.addEventListener('click', function() {
  changeColorOfArray('blue',200);
  setTimeout(function() {
    changeColorOfArray('green',200);
  },3000);
  setTimeout(function(){
    changeColorOfArray('white',200);
  },60000);
});

