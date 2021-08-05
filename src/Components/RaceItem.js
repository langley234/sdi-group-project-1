import React from 'react';

function RaceItem ({resultsEntry, key, handleRaceSelection}){
    // let raceName = resultsEntry.name;
    //console.log("name: ", resultsEntry.name)



    return (
        <div>
            <li>
                {resultsEntry.name}
                <button onClick={() => handleRaceSelection(resultsEntry)}>
                    {resultsEntry.name}
                </button>
            </li>
        </div>
    );
}

export default RaceItem