import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";
import Loader from "./Loader";
// import Form from "./Form";

class App extends Component {
  state = {
    vehicles: [],
    next: "https://swapi.co/api/vehicles"
  };

  componentDidMount() {
    const url = this.state.next;

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          next: result.next,
          vehicles: result.results
        });
        console.log(this.state);
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
        {vehicles.length > 0 ? (
          <Table vehicleData={vehicles} removeVehicle={this.removeVehicle} />
        ) : (
          <Loader />
        )}
        <button onClick={() => this.componentDidMount()}>Next</button>
      </div>
    );
  }
}

export default App;
