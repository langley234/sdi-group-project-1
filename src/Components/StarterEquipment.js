import React from "react";

class StarterEquipment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.classSelected.name) {
      return (
        <div>
            <h5>Starting Equipment:</h5>
          {/* <h1>{this.props.classSelected.name}</h1> */}
          <ul>
            {this.props.classSelected.starting_equipment.map((item) => (
              <li>{item.equipment.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
          <div>
              <h5>Starting Equipment:</h5>
              <p>
                Select a class to view your starting equipment
            </p>
          </div>
      );
    }
  }
}

export default StarterEquipment;
