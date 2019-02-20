
var counter = 0;
var marker = 'X';

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
    //if it's a draw
    if (counter === 9) {
      setTimeout(() => alert("It's a draw! Play again."), 100);
    }
    //checks the board for a winner combination
    checkForWinner();
  }
}

function checkForWinner() {

  threeInARow(1, 2, 3);
  threeInARow(4 ,5, 6);
  threeInARow(7, 8, 9);
  threeInARow(1, 4, 7);
  threeInARow(2, 5, 8);
  threeInARow(3, 6, 9);
  threeInARow(1, 5, 9);
  threeInARow(3, 5, 7);

  // for (var i = 1; i < 2; i++) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+1).innerHTML;
  //   var idValueThree = document.getElementById(i+2).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 4; i < 5; i++) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+1).innerHTML;
  //   var idValueThree = document.getElementById(i+2).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 7; i < 8; i++) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+1).innerHTML;
  //   var idValueThree = document.getElementById(i+2).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 1; i < 2; i += 3) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+3).innerHTML;
  //   var idValueThree = document.getElementById(i+6).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 2; i < 3; i+= 3) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+3).innerHTML;
  //   var idValueThree = document.getElementById(i+6).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 3; i < 4; i+= 3) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+3).innerHTML;
  //   var idValueThree = document.getElementById(i+6).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 1; i < 2; i+= 4) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+4).innerHTML;
  //   var idValueThree = document.getElementById(i+8).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
  // for (var i = 3; i < 4; i+= 2) {
  //   var idValue = document.getElementById(i).innerHTML;
  //   var idValueTwo = document.getElementById(i+2).innerHTML;
  //   var idValueThree = document.getElementById(i+4).innerHTML;
  //   if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
  //     setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 100);
  //   }
  //   if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
  //     setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 100);
  //   }
  // }
}

function threeInARow (a, b, c) {
    var idValue = document.getElementById(a).innerHTML;
    var idValueTwo = document.getElementById(b).innerHTML;
    var idValueThree = document.getElementById(c).innerHTML;
    if (idValue === 'X' && idValue === idValueTwo && idValueThree === 'X') {
      setTimeout(() => alert('Player X, winner, winner, chicken dinner!!'), 10);
    }
    if (idValue === 'O' && idValue === idValueTwo && idValueThree === 'O') {
      setTimeout(() => alert('Player O, winner, winner, chicken dinner!!'), 10);
    }
}

