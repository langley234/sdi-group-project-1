import React from "react";

class Proficiencies extends React.Component {
  constructor(props) {
    super(props);

    console.log("raceSelected ", this.props.raceSelected.name);
    if (this.props.raceSelected.name == undefined) {
      this.state = {
        isRaceValid: false,
        isLoaded: false,
        data: null,
        error: { alert: "Race Needs to be selected", status: true },
      };
    } else {
      this.state = {
        isRaceValid: true,
        isLoaded: false,
        data: null,
        error: { alert: "", status: false },
      };
    }

    this.renderLanguages = this.renderLanguages.bind(this);
    this.renderProficiencies = this.renderProficiencies.bind(this);
  }

  componentDidMount() {
    if (this.state.isRaceValid) {
      fetch(
        `https://www.dnd5eapi.co/api/races/${this.props.raceSelected.index}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error: {
                alert: `An error occurred while fetching the data`,
                status: true,
              },
            });
          }
        );
    }
  }

  renderLanguages() {
    return (
      <div>
        <h3>Languages</h3>
        {this.state.data.languages.map((item) => {
          return <li>{item.name}</li>;
        })}
      </div>
    );
  }

  renderProficiencies() {
    return (
      <div>
        <h3>Proficiencies</h3>
        {this.state.data.starting_proficiencies.map((item) => {
          return <li>{item.name}</li>;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            {this.state.isRaceValid ? (
              <div>
                <h2>{`${this.state.data.name}`}</h2>
                <ul>
                  {this.renderLanguages()}
                  {this.renderProficiencies()}
                </ul>
              </div>
            ) : (
              <div>Race is not valid</div>
            )}
          </div>
        ) : (
          <div>Select A Character Race Before Choosing Proficiencies</div>
        )}
      </div>
    );
  }
}

export default Proficiencies;
