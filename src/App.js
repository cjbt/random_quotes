import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const url =
      "https://talaikis.com/api/quotes/random/";

    fetch(proxy + url)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  
  getQuote = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const url =
      "https://talaikis.com/api/quotes/";

    fetch(proxy + url)
      .then(res => res.json())
      .then(data => console.log([...new Set([...data].map(index=> index.cat))]));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h3>{data.author}</h3>
        <p>{data.quote}</p>
        <small>{data.cat}</small>

        <button onClick={this.getQuote}>GET THIS QUOTE</button>
      </div>
    );
  }
}

export default App;
