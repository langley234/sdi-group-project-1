import React from "react";

class StarterEquipment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.classSelected);
    if (this.props.classSelected.name) {
      return (
        <div>
          <h1>{this.props.classSelected.name}</h1>
          <h4>Your starting equipment:</h4>
          <ul>
            {this.props.classSelected.starting_equipment.map((item) => (
              <li>{item.equipment.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <h4>
          You must select a class before you can view your starting equipment
        </h4>
      );
    }
  }
}

export default StarterEquipment;
