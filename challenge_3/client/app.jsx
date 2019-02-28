class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentPage: 'mainpage',
      individual: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZip: ''
    }
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleNextPageClick() {
    if (this.state.currentPage === 'mainpage') {
      this.setState(() => ({
        currentPage: 'f1Form'
      }))
      fetch('/newuser', {
        method: 'POST',
        body: {}
      })
    } else if (this.state.currentPage === 'f1Form') {
      this.setState(() => ({
        currentPage: 'f2Form'
      }))
      fetch('/form1', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.individual,
          email: this.state.email,
          password: this.state.password
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
    } else if (this.state.currentPage === 'f2Form') {
      this.setState(() => ({
        currentPage: 'f3Form'
      }))
      fetch('/form2', {
        method: 'POST',
        body: JSON.stringify({
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          phone: this.state.phone,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
    } else if (this.state.currentPage === 'f3Form') {
      this.setState(() => ({
        currentPage: 'confirmation'
      }))
      fetch('/form3', {
        method: 'POST',
        body: JSON.stringify({
          creditCard: this.state.creditCard,
          expiration: this.state.expiration,
          cvv: this.state.city,
          billingZip: this.state.billingZip,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
    } else {
      this.setState(() => ({
        currentPage: 'mainpage',
        individual: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        creditCard: '',
        expiration: '',
        cvv: '',
        billingZip: ''
      }))
      fetch('/purchase', {
        method: 'POST',
        body: {}
      })
    }
  }

  handleInputChange(event){
    var value = event.target.value;
    var name = event.target.name;

    this.setState({
      [name]: value
    })
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
            Name: <br /> <input type="text" name="individual" value={this.state.individual} onChange={this.handleInputChange} /><br />
            Email: <br /> <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} /><br />
            Password: <br /> <input type="password" name="password" onChange={this.handleInputChange} />
          </form>
          <button type="submit" id="f1Form" style={{margin: 10}} onClick={this.handleNextPageClick}> Next </button>
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
            Address: <br /> <input type="text" name="address1" value={this.state.address1} placeholder="Address Line 1" onChange={this.handleInputChange} /><br />
            <input type="text" name="address2" value={this.state.address2} placeholder="Address Line 2" onChange={this.handleInputChange} /><br />
            City: <br /> <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} /><br />
            State: <br /> <input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} /><br />
            Zip Code: <br /> <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} /><br />
            Phone Number: <br /> <input type="tel" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
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
            Credit Card Number: <br /> <input type="text" name="creditCard" value={this.state.creditCard} onChange={this.handleInputChange} /><br />
            Expiration Date: <br /> <input type="text" name="expiration" value={this.state.expiration} placeholder="mm/yy" onChange={this.handleInputChange} /><br />
            CVV: <br /> <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleInputChange} /><br />
            Billing Zip Code: <br /> <input type="text" name="billingZip" value={this.state.billingZip} onChange={this.handleInputChange} />
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
          Name: {this.state.individual} <br />
          Email: {this.state.email} <br />
          <h4> Shipping Information </h4>
          Address: {this.state.address1} {this.state.address2} <br />
          City: {this.state.city} <br />
          State: {this.state.state} <br />
          Zip Code: {this.state.zipcode} <br />
          Phone Number: {this.state.phone} <br />
          <h4>Payment Information</h4>
          Credit Card Number: {this.state.creditCard} <br />
          Expiration Date: {this.state.expiration} <br />
          CVV: {this.state.cvv} <br />
          Billing Zip Code: {this.state.billingZip} <br />

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
