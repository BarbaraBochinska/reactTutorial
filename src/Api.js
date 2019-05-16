import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://swapi.co/api/vehicles";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results
        });
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);

    const result = data.map((entry, index) => {
      return (
        <div>
          <li key={index}>{entry.name}</li>
          <li key={index}>{entry.model}</li>
        </div>
      );
    });

    return <ul>{result}</ul>;
  }
}

export default App;
