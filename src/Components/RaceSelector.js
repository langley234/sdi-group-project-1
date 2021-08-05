import React from 'react';
import RaceItem from './RaceItem.js';

class RaceSelector extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            racesData: {},
            selectedRace: {},
            raceArray: []
            
        }

        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount(){
        fetch('https://www.dnd5eapi.co/api/races')
        .then(response => response.json())
        .then(data => this.setState({racesData: data}))
        .then(() => this.setState({raceArray: this.state.racesData.results}))

        
        // .then(() => console.log("this should alert ", this.state.raceArray))
    }

    handleClick(input) {

        this.setState({selectedRace: input})
        console.log("What is this????", input)
        console.log("this is the race: ", this.state.selectedRace)
    }

    // <RaceItem resultsEntry={resultsEntry} key={key}>This should be a list of Races</RaceItem>

    render()
    {
        //  let resultsArray = this.state.racesData.results;


        
        return (
            <div>
                Race
                <h1>Select Race Below</h1>
                
                <div>
                    this should be a list of races
                    <ul>
                    {           
                        this.state.raceArray.map((resultsEntry, index) => {
                            return (<RaceItem resultsEntry={resultsEntry} key={index} handleClick={this.handleClick}>This should be a list of Races</RaceItem>)
                        })
                    }
                    </ul>
                </div>

            </div>
        );
    }
}

export default RaceSelector;