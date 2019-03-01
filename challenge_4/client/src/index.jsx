import Column from './components/column.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCircleClick = this.handleCircleClick.bind(this);
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
    }
  }

  updateBoard(id, color) {
    for (var i = 0; i < this.board.length; i++) {
      for (var k = 0; k < this.board[i].length; k++) {
        if (this.board[i][k] === id) {
          this.board[i][k] = color;
          return;
        }
      }
    }
  }

  checkForWinner(color) {
    //scans for a winner horizontally
    for (var i = 0; i < this.board.length; i++) {
      var count = 0;
      for (var k = 0; k < this.board[i].length; k++) {
        if (this.board[i][k] === color) {
          count++;
          if (count === 4) {
            setTimeout(() => alert(`${color}, you win!`), 25);
          }
        } else {
          count = 0;
        }
      }
    }
  }

  handleCircleClick(event) {
    var targetId = document.getElementById(event.target.id).id;

    if (event.target.style.backgroundColor === 'red' || event.target.style.backgroundColor === 'yellow') {
      alert('Space occupied, choose another circle');
    } else {
      if (this.state.color === 'red') {
        event.target.style.backgroundColor = 'red';
        console.log('Red ID', targetId.id);
        this.updateBoard(targetId, 'red');
        this.checkForWinner('red');
        this.setState({color: 'yellow'});
        console.log('Board', this.board);
      }
      if (this.state.color === 'yellow') {
        event.target.style.backgroundColor = 'yellow';
        console.log('Yellow ID', targetId);
        this.updateBoard(targetId, 'yellow');
        this.checkForWinner('yellow');
        this.setState({color: 'red'});
        console.log('Board', this.board);
      }
    }
    console.log('getElementById', document.getElementById(event.target.id));
    // console.log('target', event.target.class)
  }

  render() {
    return(
      <div>
        {this.columns.map(
          i => <Column columnId={i} rows={this.rows} key={`Column${i}`} handleCircleClick={this.handleCircleClick}/>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
