import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";
// import Form from "./Form";

class App extends Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    const url = "https://swapi.co/api/vehicles";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          vehicles: result.results
        });
      });
  }

  removeVehicle = index => {
    const { vehicles } = this.state;

    this.setState({
      vehicles: vehicles.filter((vehicle, i) => {
        return i !== index;
      })
    });
  };

  // handleSubmit = vehicle => {
  //   this.setState({ vehicles: [...this.state.vehicles, vehicle] });
  // };

  render() {
    const { vehicles } = this.state;

    return (
      <div className="full-container">
        <Header />
        <Table vehicleData={vehicles} removeVehicle={this.removeVehicle} />
        {/* <Form handleSubmit={this.handleSubmit} /> */}
      </div>
    );
  }
}

export default App;
