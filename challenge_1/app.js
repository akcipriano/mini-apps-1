
var counter = 0;
var marker = 'X';
var winner = false;

function setMarker(e) {
  //sets a physical marker if the space is empty
  if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O'){
    alert('Space is filled. Choose another square!');
  } else {
    var idNumber = e.target.id;
    if (counter % 2 === 0) {
      marker = 'X';
    } else {
      marker = 'O';
    }
    //marks the board with corresponding X or O
    document.getElementById(idNumber).innerHTML = marker;

    counter++
    //checks the board for a winner combination
    checkForWinner();

    //if it's a draw
    if (winner === false && counter === 9) {
      setTimeout(() => alert("It's a draw! Play again."), 50);
    }
    console.log(counter)
  }
}

//checks all possible rows for a three-of-kind
function checkForWinner() {
  threeInARow(1, 2, 3);
  threeInARow(4 ,5, 6);
  threeInARow(7, 8, 9);
  threeInARow(1, 4, 7);
  threeInARow(2, 5, 8);
  threeInARow(3, 6, 9);
  threeInARow(1, 5, 9);
  threeInARow(3, 5, 7);
}

//checks one row for a three-of-a-kind, if found, game resets
function threeInARow (a, b, c) {
  var idValue = document.getElementById(a).innerHTML;
  var idValueTwo = document.getElementById(b).innerHTML;
  var idValueThree = document.getElementById(c).innerHTML;
  if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
    setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 50);
    setTimeout(() => resetGame(), 100);
    winner = true;
  }
  if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
    setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 50);
    setTimeout(() => resetGame(), 100);
    winner = true;
  }
}

function resetGame () {
  for (var i = 1; i < 10; i++){
    document.getElementById(i).innerHTML = '';
  }
  counter = 0;
  marker = 'X'
  winner = false;
}