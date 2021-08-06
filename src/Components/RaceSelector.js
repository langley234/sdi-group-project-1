import React from 'react';
import NavBar from './NavBar'
import RaceItem from './RaceItem.js';
import {Link} from  "react-router-dom";

class RaceSelector extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoaded: false,
            error: {alert: 'No Error', status:false},
            racesData: {},
            raceTraitsArray: [],
            data: null
            
        }

        this.raceTraits = [];
        this.races = [];

        //this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount(){
        // fetch(`https://www.dnd5eapi.co/api/races`)
        // .then(response => response.json())
        // .then(data => this.setState({racesData: data}))
        // .then(() => console.log(this.props.racesData))
        // .then(() => this.setState({raceArray: this.state.racesData.results}))
        // .then(() => console.log(this.props.raceArray))

        fetch(`https://www.dnd5eapi.co/api/races`)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log('RESULT HERE ', result);
                    this.setState({
                        racesData: result.results
                    });

                    this.races = result.results;

                    return result;
                })
                .then( (result) => {
                    //console.log('RESULT ', result);
                    Promise.all( result.results.map((item) => {
                        return fetch(`https://www.dnd5eapi.co${item.url}`)
                            .then(res => res.json())
                            .then( (result) => {
                                this.raceTraits.push(result);
                                this.setState({
                                    raceTraitsArray: this.raceTraits
                                })
                            })
                    }) )
                    .then( () => {
                        

                        let localData = [];

                        for (let i = 0; i < this.races.length; i++)
                        {
                            localData.push({race: this.races[i], traits: this.raceTraits[i]})
                        }

                        this.setState({
                            isLoaded: true,
                            data: localData
                        }) 
                        //console.log('DONE ', localData);
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: {alert: `Failed to fetch races data`, status: true}
                    });
                }
            )
    }

    // handleClick(input) {

    //     this.setState({selectedRace: input})
    //     console.log("What is this????", input)
    //     console.log("this is the race: ", this.state.selectedRace)
    // }

    // <RaceItem resultsEntry={resultsEntry} key={key}>This should be a list of Races</RaceItem>

    render()
    {
        //  let resultsArray = this.state.racesData.results;


        
        return (
            <div>
                <NavBar />
                {
                    this.state.isLoaded ?
                    <div>
                            {
                                this.state.data.map((item) => {
                                    return <div><p>{item.race.name}</p>
                                        <h3>Traits</h3>
                                        <div>{item.traits.traits.map((traitItem) => {
                                            return <p>{traitItem.name}</p>
                                        })}</div>
                                        <Link to="/">
                                            <button
                                                onClick={() => { this.props.handleRaceSelection(item) }}>Select
                                            </button>
                                        </Link>
                                    </div>
                                })
                            }
                    </div> :
                    <div>Loading...</div>
                }

                {/* Race
                <h1>Select Race Below</h1>
                
                <div>
                    Click the race and press back to continue
                    <div>
                    {           
                        this.state.raceArray.map((resultsEntry, index) => {
                            return (<RaceItem resultsEntry={resultsEntry} key={index} handleRaceSelection={this.props.handleRaceSelection} traitsAssigned={this.props.traitsAssigned}>This should be a list of Races</RaceItem>)
                        })
                    }
                    </div>
                </div>
                <div>
                    <Link to="/">
                    <button>back</button>
                    </Link>
                </div> */}

            </div>
        );
    }
}

export default RaceSelector;