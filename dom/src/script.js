const element = document.getElementById('section-two');
const divs = element.querySelectorAll('div');

// Arrow Function
divs.forEach(function (element, index) {
  if (index % 2 !== 0) {
    element.style.backgroundColor = 'red';
  }
});

setTimeout(function() {
  const element = document.getElementById('section-one');
  element.innerHTML = '';
}, 5000);
