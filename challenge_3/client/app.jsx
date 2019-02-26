class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentPage: 'mainpage'
    }
    this.handleNextPageClick = this.handleNextPageClick.bind(this)
  }

  handleNextPageClick() {
    if (this.state.currentPage === 'mainpage') {
      this.setState(() => ({
        currentPage: 'f1Form'
      }))
    } else if (this.state.currentPage === 'f1Form') {
      this.setState(() => ({
        currentPage: 'f2Form'
      }))
    } else if (this.state.currentPage === 'f2Form') {
      this.setState(() => ({
        currentPage: 'f3Form'
      }))
    } else if (this.state.currentPage === 'f3Form') {
      this.setState(() => ({
        currentPage: 'confirmation'
      }))
    } else {
      this.setState(() => ({
        currentPage: 'mainpage'
      }))
    }
  }

  render() {
    if (this.state.currentPage === 'mainpage') {
      return (
        <div>
          <h1 style={{textDecoration: 'underline'}}> Check Out</h1>
          <h3> Press below to proceed with purchase:</h3>
          <button id="checkout" style={{margin: 10}} onClick={this.handleNextPageClick}>Checkout</button>
        </div>
      )
    }

    if (this.state.currentPage === 'f1Form') {
      return (
        <div>
          f1Form
          <button id="f1Form" style={{margin: 10}} onClick={this.handleNextPageClick}>Next</button>
        </div>
      )
    }

    if (this.state.currentPage === 'f2Form') {
      return (
        <div>
          f2Form
          <button id="f2Form" style={{margin: 10}} onClick={this.handleNextPageClick}>Nextt</button>
        </div>
      )
    }

    if (this.state.currentPage === 'f3Form') {
      return (
        <div>
          f3Form
          <button id="f3Form" style={{margin: 10}} onClick={this.handleNextPageClick}>Next</button>
        </div>
      )
    }

    if (this.state.currentPage === 'confirmation') {
      return (
        <div>
          Confirmation Page
          <button id="purchase" style={{margin: 10}} onClick={this.handleNextPageClick}>Purchase</button>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mainpage')
);
