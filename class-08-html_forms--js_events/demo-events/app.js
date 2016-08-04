var clicky = document.getElementById('clicky');
var clickybutton = document.getElementById('clickybutton');
var counter = 0;

clicky.addEventListener('click', handleClicky);

clickybutton.addEventListener('click', function() {
  console.log('button was clicked');
});

var handleClicky = function() {
  counter += 1;
  clicky.textContent = counter + ' times clicked. Click yourself into a frenzy';
};

function handleClicky(event) {
  counter += 1;
  clicky.textContent = event.target.id;
};

handleClicky();
