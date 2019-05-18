import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";
import Loader from "./Loader";
import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    vehicles: [],
    next: "https://swapi.co/api/vehicles",
    previous: null
  };

  componentDidMount() {
    const url = this.state.next;
    this.handleUrl(url);
  }

  handleUrl(url) {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          next: result.next,
          vehicles: result.results,
          previous: result.previous
        });
        console.log(this.state);
      });
  }

  handlePage(nextOrPreviousPage) {
    this.setState({ vehicles: [] });
    const url = nextOrPreviousPage;
    if (url !== null) {
      this.handleUrl(url);
    }
  }

  removeVehicle = index => {
    const { vehicles } = this.state;

    this.setState({
      vehicles: vehicles.filter((vehicle, i) => {
        return i !== index;
      })
    });
  };

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
        <Button
          disabled={this.state.previous === null}
          onClick={() => this.handlePage(this.state.previous)}
        >
          Previous
        </Button>
        <Button
          disabled={this.state.next === null}
          onClick={() => this.handlePage(this.state.next)}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default App;
