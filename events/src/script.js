const element = document.getElementById('section-one');
const buttons = element.querySelectorAll('button');

// Arrow Function
buttons.forEach(function (element, index) {
  if (index % 2 !== 0) {
    element.style.backgroundColor = 'red';
  }

  element.addEventListener('click', function (e) {
    const btn = e.target;
    btn.style.backgroundColor = 'blue';
  })
});

const btnClicky = document.getElementById('btn__clicky');
btnClicky.addEventListener('click', function (e) {
  alert('Child Clicked');
});