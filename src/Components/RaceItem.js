import React from 'react';
import {Link} from 'react-router-dom'
import RaceTraits from './RaceTraits.js'


class RaceItem extends React.Component{
    
    constructor({resultsEntry, key, handleRaceSelection}){
        super({resultsEntry, key, handleRaceSelection})
        this.state = {
            raceTraits: []
        }

    }
    // let raceName = resultsEntry.name;
    componentDidMount(){
    fetch(`https://www.dnd5eapi.co${this.resultsEntry.url}`)
    .then(response => response.json())
    .then(data => this.setState({raceTraits: data.traits}))
    .then(() => console.log('TRAITS ASSIGNED ', this.resultsEntry));
    }


    render(){
        return (
            <div>
                <div>
                    {this.resultsEntry.name}
                    <Link to='/'>
                        <button onClick={() => this.handleRaceSelection(this.resultsEntry)}>
                        {this.resultsEntry.name}
                        </button>
                    </Link>
                </div>
                <div>

                </div>
            </div>

        );
    }
}

/*
<ul>
{this.state.raceTraits.map((entry, i) => {
return( <RaceTraits entry={entry} i={i}/>)
})}
</ul>
*/

export default RaceItem