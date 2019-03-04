var assert = require('assert');

describe('Possible Winners', function() {
  describe('Horizonal Winner', function() {
    it('should detect a winner if there is a color four-in-a-row horizontally', function () {
      var board = [
        ['1,6','2,6','3,6','4,6','5,6','6,6','7,6'],
        ['1,5','2,5','3,5','4,5','5,5','6,5','7,5'],
        ['1,4','2,4','red','red','red','red','7,4'],
        ['1,3','2,3','3,3','4,3','5,3','6,3','7,3'],
        ['1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
        ['1,1','2,1','3,1','4,1','5,1','6,1','7,1']
      ];

      var checkForWinner = (color) => {
        //scans for a winner horizontally; this is the partial code dealing with horizontal wins
        for (var i = 0; i < board.length; i++) {
          var count = 0;
          for (var k = 0; k < board[i].length; k++) {
            if (board[i][k] === color) {
              count++;
              if (count === 4) {
                //this portion has been updated to return the string value instead of an alert
                return `${color}, you win! Refreshing page to start a new game.`;;
              }
            } else {
              count = 0;
            }
          }
        }
      }
      assert.equal(checkForWinner('red'), `red, you win! Refreshing page to start a new game.`);
    });
  });

  describe('Vertical Winner', function(){
    it('should detect a winner if there is a color four-in-a-row vertically', function() {
      var board = [
        ['1,6','yellow','3,6','4,6','5,6','6,6','7,6'],
        ['1,5','yellow','3,5','4,5','5,5','6,5','7,5'],
        ['1,4','yellow','3,4','4,4','5,4','6,4','7,4'],
        ['1,3','yellow','3,3','4,3','5,3','6,3','7,3'],
        ['1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
        ['1,1','2,1','3,1','4,1','5,1','6,1','7,1']
      ];

      var checkForWinner = (color) => {
        //scans for a winner vertically; this is the partial code dealing with vertical wins
        for (var i = 0; i < 6; i++) {
          var count = 0;
          for (var k = 0; k < board.length; k++) {
            if (board[k][i] === color) {
              count++;
              if (count === 4) {
                //this portion has been updated to return the string value instead of an alert
                return `${color}, you win! Refreshing page to start a new game.`;;
              }
            } else {
              count = 0;
            }
          }
        }
      }
      assert.equal(checkForWinner('yellow'), `yellow, you win! Refreshing page to start a new game.`);
    });
  });

  describe('Diagonal Winner', function() {
    it('should detect a winner if there is a color four-in-a-row diagonally from upper left to lower right', function() {
      var board = [
        ['1,6','2,6','3,6','red','5,6','6,6','7,6'],
        ['1,5','2,5','3,5','4,5','red','6,5','7,5'],
        ['1,4','2,4','3,4','4,4','5,4','red','7,4'],
        ['1,3','2,3','3,3','4,3','5,3','6,3','red'],
        ['1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
        ['1,1','2,1','3,1','4,1','5,1','6,1','7,1']
      ];

      var checkForWinner = (color) => {
      //scans for a winner diagonally - upper left to lower right (partial code)
      var diagCount = 0;
      for (var i = 0; i < board.length; i++) {
        if (board[i][i] === color) {
          diagCount++;
          if (diagCount === 4) {
            //this portion has been updated to return the string value instead of an alert
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
      diagCount = 0;
      for (var i = 0; i < board.length; i++) {
        if (board[i][i+1] === color) {
          diagCount++;
          if (diagCount === 4) {
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
      diagCount = 0;
      for (var i = 0; i < board.length - 1; i++) {
        if (board[i][i+2] === color) {
          diagCount++;
          if (diagCount === 4) {
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
      diagCount = 0;
      for (var i = 0; i < board.length - 2; i++) {
        if (board[i][i+3] === color) {
          diagCount++;
          if (diagCount === 4) {
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
      diagCount = 0;
      for (var i = 0; i < board.length - 1; i++) {
        if (board[i+1][i] === color) {
          diagCount++;
          if (diagCount === 4) {
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
      diagCount = 0;
      for (var i = 0; i < board.length - 2; i++) {
        if (board[i+2][i] === color) {
          diagCount++;
          if (diagCount === 4) {
            return `${color}, you win! Refreshing page to start a new game.`;
          }
        } else {
          diagCount = 0;
        }
      }
    }
    assert.equal(checkForWinner('red'), `red, you win! Refreshing page to start a new game.`);
    });

    it('should detect a winner if there is a color four-in-a-row diagonally from upper right to lower left', function() {
      var board = [
        ['1,6','2,6','3,6','4,6','5,6','6,6','7,6'],
        ['1,5','2,5','3,5','4,5','5,5','yellow','7,5'],
        ['1,4','2,4','3,4','4,4','yellow','6,4','7,4'],
        ['1,3','2,3','3,3','yellow','5,3','6,3','7,3'],
        ['1,2','2,2','yellow','4,2','5,2','6,2','7,2'],
        ['1,1','2,1','3,1','4,1','5,1','6,1','7,1']
      ];

      var checkForWinner = (color) => {
         //scans for a winner diagonally - upper right to lower left (partial code)
        var diagCount = 0;
        for (var i = 0; i < board.length; i++) {
          if (board[i][6 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
              //this portion has been updated to return the string value instead of an alert
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
        diagCount = 0;
        for (var i = 0; i < board.length; i++) {
          if (board[i][5 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
        diagCount = 0;
        for (var i = 0; i < board.length - 1; i++) {
          if (board[i][4 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
        diagCount = 0;
        for (var i = 0; i < board.length - 2; i++) {
          if (board[i][3 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
        diagCount = 0;
        for (var i = 1; i < board.length; i++) {
          if (board[i][7 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
        diagCount = 0;
        for (var i = 2; i < board.length; i++) {
          if (board[i][8 - i] === color) {
            diagCount++;
            if (diagCount === 4) {
               return `${color}, you win! Refreshing page to start a new game.`;
            }
          } else {
            diagCount = 0;
          }
        }
      };
      assert.equal(checkForWinner('yellow'), `yellow, you win! Refreshing page to start a new game.`);
    });
  });

  describe('Tie Game', function() {
    it('should detect a tie game', function() {
      var count = 0;
      //placeMarker contains the function that increases the tiecount in this.state when a marker is placed
      var placeMarker = (color) => {
        count += 1;
      };
      var checkForWinner = (color) => {
        //checks for a tie (partial code); there are 42 available spaces on the board
        if (count === 42) {
          return `It's a tie! Refreshing page to start a new game.`;
      };
      for (var i = 0; i < 43; i++) {
        placeMarker();
      }
      assert.equal(checkForWinner(), `It's a tie! Refreshing page to start a new game.`);
      };
    });
  });
});