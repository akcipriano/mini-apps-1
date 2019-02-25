class App extends React.Component {
  render() {
    return (
      <div>
        <button id="checkout" style={{margin: 25}}>Checkout</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mainpage')
);
