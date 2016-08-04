var larry = document.getElementById('larry');
var curly = document.getElementById('curly');
var moe = document.getElementById('moe');

var theContainer = document.getElementById('container');

theContainer.addEventListener('click', handleContainer);

function handleContainer(event){
  console.log(event.target.id);
}

// larry.addEventListener('click', handleLarry);
// curly.addEventListener('click', handleCurly);
// moe.addEventListener('click', handleMoe);
//
// function handleLarry(event){
//   console.log(event.target.id);
// }
//
// function handleCurly(event){
//   console.log(event.target.id);
// }
//
// function handleMoe(event){
//   console.log(event.target.id);
// }
