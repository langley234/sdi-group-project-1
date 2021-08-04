import React from 'react';
import RaceItem from './RaceItem.js';

class RaceSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            racesData: {},
            selectedRace: "yes",
            raceArray: [],
            raceName: "dragonborn"
        }
    }

    componentDidMount(){
        fetch('https://www.dnd5eapi.co/api/races')
        .then(response => response.json())
        .then(data => this.setState({racesData: data}))
        // .then(() => this.setState({raceName: this.state.racesData.results[8].name}))
    }

    // {           
    //     movieListSource.map((movieListItem, key) => {
    //         return <MovieListItem class="movie-item" movieListItem={movieListItem} key={key}>This should be an array of movies</MovieListItem>
    //     })
    //     }

    render()
    {


        
        return (
            <div>
                Race
                <h1>Select Race Below</h1>
                
            

            
                <button>
                <RaceItem raceName={this.state.raceName}/>
                </button>

            </div>
        );
    }
}

export default RaceSelector;