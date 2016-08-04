var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var allProducts = [];

var picNames = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}

for (var i = 0; i < picNames.length; i++) {
  allProducts.push(new Product(picNames[i]));
}

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function displayPics() {
  var leftIndex = randNum(0, allProducts.length);
  left.src = allProducts[leftIndex].path;
  left.alt = allProducts[leftIndex].name;
  allProducts[leftIndex].views += 1;
  // console.log(allProducts[leftIndex].name + ' has been shown ' + allProducts[leftIndex].views + ' times');

  var centerIndex = randNum(0, allProducts.length);
  while (centerIndex === leftIndex) {
    // console.log('duplicate found between center and left');
    centerIndex = randNum(0, allProducts.length);
  }
  center.src = allProducts[centerIndex].path;
  center.alt = allProducts[centerIndex].name;
  allProducts[centerIndex].views += 1;
  // console.log(allProducts[centerIndex].name + ' has been shown ' + allProducts[centerIndex].views + ' times');

  var rightIndex = randNum(0, allProducts.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    // console.log('duplicate found between right and left/center');
    rightIndex = randNum(0, allProducts.length);
  }
  right.src = allProducts[rightIndex].path;
  right.alt = allProducts[rightIndex].name;
  allProducts[rightIndex].views += 1;
  // console.log(allProducts[rightIndex].name + ' has been shown ' + allProducts[rightIndex].views + ' times');
}

function handlePicContainerClick() {
  if(event.target.id === 'pic-container') {
    return alert('CLICK DIRECTLY ON A PICTURE!!!!!');
  }
  // console.log(event.target.alt + ' was clicked');
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].clicks += 1;
      console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
    }
  }

  displayPics();
}

picContainer.addEventListener('click', handlePicContainerClick);



displayPics();
