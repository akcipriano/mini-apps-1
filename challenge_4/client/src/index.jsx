import Column from './components/column.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.getColumnId = this.getColumnId.bind(this);
    this.columnId = '';
    this.columns = [1, 2, 3, 4, 5, 6, 7];
    this.rows = [6, 5, 4, 3, 2, 1];
    this.board = [
      ['1,6','2,6','3,6','4,6','5,6','6,6','7,6'],
      ['1,5','2,5','3,5','4,5','5,5','6,5','7,5'],
      ['1,4','2,4','3,4','4,4','5,4','6,4','7,4'],
      ['1,3','2,3','3,3','4,3','5,3','6,3','7,3'],
      ['1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
      ['1,1','2,1','3,1','4,1','5,1','6,1','7,1'],
    ];
    this.state ={
      color: 'red',
      tieCount: 0
    }
  }

  updateBoard(id, color) {
    for (var i = 0; i < this.board.length; i++) {
      for (var k = 0; k < this.board[i].length; k++) {
        if (this.board[i][k] === id) {
          this.board[i][k] = color;
        }
      }
    }
  }

  checkForWinner(color) {
    //checks for a tie
    if (this.state.tieCount === 42) {
      setTimeout(() => alert(`It's a tie! Refreshing page to start a new game.`), 25);
      setTimeout(() => location.reload(), 50);
    }
    //scans for a winner horizontally
    for (var i = 0; i < this.board.length; i++) {
      var count = 0;
      for (var k = 0; k < this.board[i].length; k++) {
        if (this.board[i][k] === color) {
          count++;
          if (count === 4) {
            setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
            setTimeout(() => location.reload(), 50);
          }
        } else {
          count = 0;
        }
      }
    }
    //scans for a winner vertically
    for (var i = 0; i < 6; i++) {
      var count = 0;
      for (var k = 0; k < this.board.length; k++) {
        if (this.board[k][i] === color) {
          count++;
          if (count === 4) {
            setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
            setTimeout(() => location.reload(), 50);
          }
        } else {
          count = 0;
        }
      }
    }
    //scans for a winner diagonally - upper left to lower right
    var diagCount = 0;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
          return;
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][i+1] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 1; i++) {
      if (this.board[i][i+2] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 2; i++) {
      if (this.board[i][i+3] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 1; i++) {
      if (this.board[i+1][i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 2; i++) {
      if (this.board[i+2][i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    //scans for a winner diagonally - upper right to lower left
    var diagCount = 0;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][6 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
          return;
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][5 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 1; i++) {
      if (this.board[i][4 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 0; i < this.board.length - 2; i++) {
      if (this.board[i][3 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 1; i < this.board.length; i++) {
      if (this.board[i][7 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
    diagCount = 0;
    for (var i = 2; i < this.board.length; i++) {
      if (this.board[i][8 - i] === color) {
        diagCount++;
        if (diagCount === 4) {
          setTimeout(() => alert(`${color}, you win! Refreshing page to start a new game.`), 25);
          setTimeout(() => location.reload(), 50);
        }
      } else {
        diagCount = 0;
      }
    }
  }
  //gets the column id to be able to scan each one for markers (in placeMarker)
  getColumnId(id) {
    this.columnId = document.getElementById(id).id;
  }

  placeMarker (color) {
    var targetElement;
    //Accesses all the squares in the column
    setTimeout(() => {targetElement = $(`#${document.getElementById(this.columnId).id}`).children()}, 5);
    //Checks each square in each column from bottom up and adds the marker to the next available empty space
    setTimeout(() => {
      if (targetElement[5].children[0].style.backgroundColor === 'red' || targetElement[5].children[0].style.backgroundColor === 'yellow') {
        if (targetElement[4].children[0].style.backgroundColor === 'red' || targetElement[4].children[0].style.backgroundColor === 'yellow') {
          if (targetElement[3].children[0].style.backgroundColor === 'red' || targetElement[3].children[0].style.backgroundColor === 'yellow') {
            if (targetElement[2].children[0].style.backgroundColor === 'red' || targetElement[2].children[0].style.backgroundColor === 'yellow') {
              if (targetElement[1].children[0].style.backgroundColor === 'red' || targetElement[1].children[0].style.backgroundColor === 'yellow') {
                if (targetElement[0].children[0].style.backgroundColor === 'red' || targetElement[0].children[0].style.backgroundColor === 'yellow') {
                   alert('Column is full, choose another column.');
                }
                else {
                  targetElement = targetElement[0].children[0]
                  targetElement.style.backgroundColor = color;
                  this.updateBoard(targetElement.id, color);
                  this.setState({tieCount: this.state.tieCount += 1});
                }
              } else {
                targetElement = targetElement[1].children[0]
                targetElement.style.backgroundColor = color;
                this.updateBoard(targetElement.id, color);
                this.setState({tieCount: this.state.tieCount += 1});
              }
            } else {
              targetElement = targetElement[2].children[0]
              targetElement.style.backgroundColor = color;
              this.updateBoard(targetElement.id, color);
              this.setState({tieCount: this.state.tieCount += 1});
            }
          } else {
            targetElement = targetElement[3].children[0]
            targetElement.style.backgroundColor = color;
            this.updateBoard(targetElement.id, color);
            this.setState({tieCount: this.state.tieCount += 1});
          }
        } else {
          targetElement = targetElement[4].children[0]
          targetElement.style.backgroundColor = color;
          this.updateBoard(targetElement.id, color);
          this.setState({tieCount: this.state.tieCount += 1});
        }
      } else {
        targetElement = targetElement[5].children[0]
        targetElement.style.backgroundColor = color;
        this.updateBoard(targetElement.id, color);
        this.setState({tieCount: this.state.tieCount += 1});
      }
    }, 10)
  }
  //All actions combined when placing a marker: need to place it and then check for a possible winner
  handleCircleClick(event) {
    if (this.state.color === 'red') {
      this.placeMarker('red');
      this.setState({color: 'yellow'});
      setTimeout(() => this.checkForWinner('red'), 50);
    }
    if (this.state.color === 'yellow') {
      this.placeMarker('yellow');
      this.setState({color: 'red'});
      setTimeout(() => this.checkForWinner('yellow'), 50);
    }
    console.log('Count', this.state.tieCount)
}
  render() {
    return(
      <div>
        {this.columns.map(
          i => <Column columnId={i} rows={this.rows} key={`Column${i}`} getColumnId={this.getColumnId} handleCircleClick={this.handleCircleClick}/>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
