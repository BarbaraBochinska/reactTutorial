import React, { Component } from "react";

class Table extends Component {
  render() {
    const { vehicleData, removeVehicle } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody vehicleData={vehicleData} removeVehicle={removeVehicle} />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Model</th>
        <th>Cost in Credits</th>
        <th>Crew</th>
        <th>Passengers</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.vehicleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.model}</td>
        <td>{row.cost_in_credits}</td>
        <td>{row.crew}</td>
        <td>{row.passengers}</td>
        <td>
          <button onClick={() => props.removeVehicle(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default Table;
