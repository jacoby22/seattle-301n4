var allCats = [];

function Cat(name, color, tail) {
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
}

var bud = new Cat('Buddy', 'Orange and White', 'VERY long');
var alley = new Cat('Alistair', 'Orange', 'Small');
var trill = new Cat('Trillian', 'Black/Orange', 'Very small');
var meowmix = new Cat('Meow Mix', 'Black', 'Medium');
var toeny = new Cat('Toeny', 'Gray', 'Medium-Large');

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>

  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

var catTable = document.getElementById('cats');

var headings = ['Name', 'Color', 'Tail'];
var buddyCat = ['Buddy', 'Orange and white', 'Mega-long'];
var arrayTableContent = [headings, buddyCat];

for(var j = 0; j < arrayTableContent.length; j++) {
  var trElement = document.createElement('tr');
    for (var i = 0; i < headings.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = arrayTableContent[j][i];
      trElement.appendChild(thElement);
    }
  catTable.appendChild(trElement);
}

// var trElement = document.createElement('tr');
// for (var i = 0; i < headings.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = buddyCat[i];
//   trElement.appendChild(tdElement);
// }
