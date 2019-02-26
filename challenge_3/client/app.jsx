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
          <h1 style={{textDecoration: 'underline'}}> Check Out </h1>
          <h3> Press below to proceed with purchase: </h3>
          <button id="checkout" style={{margin: 10}} onClick={this.handleNextPageClick}> Checkout </button>
        </div>
      )
    }
    // F1 collects name, email, and password for account creation.
    if (this.state.currentPage === 'f1Form') {
      return (
        <div>
          <h4> Step 1 of 3 </h4>
          <h3> Pesonal Information </h3>
          <form>
            Name: <br /> <input type="text" name="name"></input><br />
            Email: <br /> <input type="email" name="email"></input><br />
            Password: <br /> <input type="password" name="password"></input>
          </form>
          <button id="f1Form" style={{margin: 10}} onClick={this.handleNextPageClick}> Next </button>
        </div>
      )
    }
    // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
    if (this.state.currentPage === 'f2Form') {
      return (
        <div>
          <h4> Step 2 of 3 </h4>
          <h3> Shipping Information </h3>
          <form>
            Address: <br /> <input type="text" name="address1" placeholder="Address Line 1"></input><br />
            <input type="text" name="address2" placeholder="Address Line 2"></input><br />
            City: <br /> <input type="text" name="city"></input><br />
            State: <br /> <input type="text" name="state"></input><br />
            Zip Code: <br /> <input type="text" name="zipcode"></input><br />
            Phone Number: <br /> <input type="tel" name="phone"></input>
          </form>
          <button id="f2Form" style={{margin: 10}} onClick={this.handleNextPageClick}> Next </button>
        </div>
      )
    }
    // F3 collects credit card #, expiry date, CVV, and billing zip code.
    if (this.state.currentPage === 'f3Form') {
      return (
        <div>
          <h4> Step 3 of 3 </h4>
          <h3> Payment Information </h3>
          <form>
            Credit Card Number: <br /> <input type="text" name="creditcard"></input>
            <br />
            Expiration Date: <br /> <input type="text" name="date"></input>
            <br />
            CVV: <br /> <input type="text" name="cvv"></input>
            <br />
            Billing Zip Code: <br /> <input type="text" name="billingzipcode"></input>
          </form>
          <button id="f3Form" style={{margin: 10}} onClick={this.handleNextPageClick}> Next </button>
        </div>
      )
    }
    // The final step is a confirmation page which summarizes the data collected in the prior three steps.
    // This page contains a Purchase button that completes the purchase.
    if (this.state.currentPage === 'confirmation') {
      return (
        <div>
          <h3> Confirmation Page </h3>
          <h4> Personal Information </h4>
          Name: <br />
          Email: <br />
          <h4> Shipping Information </h4>
          Address: <br />
          City: <br />
          State: <br />
          Zip Code: <br />
          Phone Number: <br />
          <h4>Payment Information</h4>
          Credit Care Number: <br />
          Expiration Date: <br />
          CVV: <br />
          Billing Zip Code: <br />

          <button id="purchase" style={{margin: 10}} onClick={this.handleNextPageClick}> Purchase </button>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mainpage')
);
