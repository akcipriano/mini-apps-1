import Row from './components/row.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.columns = [1, 2, 3, 4, 5, 6, 7];
    this.rows = [6, 5, 4, 3, 2, 1];
    this.state ={

    }
  }

  handleCircleClick(event) {
    var target = event.target;
    console.log('Click', target);

  }

  render() {
    return(
      <div>
        {this.rows.map(
          i => <Row rowId={i} columns={this.columns} key={`Row${i}`} handleCircleClick={this.handleCircleClick}/>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
