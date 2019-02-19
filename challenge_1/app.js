
var counter = 0;
var marker = 'X';

function setMarker(e) {
  var idName = e.target.id;
  counter++
  if (counter % 2 === 0) {
    marker = 'O';
  } else {
    marker = 'X';
  }
  document.getElementById(idName).innerHTML = marker;
}


