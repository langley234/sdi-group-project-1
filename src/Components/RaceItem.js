import React from 'react';
import {Link} from 'react-router-dom'

function RaceItem ({resultsEntry, key, handleRaceSelection, traitsAssigned}){
    // let raceName = resultsEntry.name;
    //console.log("name: ", resultsEntry.name)




    return (
        <div>
            <li>
                {resultsEntry.name}
                <Link to='/'>
                    <button onClick={() => handleRaceSelection(resultsEntry)}>
                    {resultsEntry.name}
                    </button>
                </Link>
            </li>
        </div>
    );
}

export default RaceItem