import React from 'react';

function RaceItem ({resultsEntry, key, handleClick}){
    // let raceName = resultsEntry.name;
    //console.log("name: ", resultsEntry.name)



    return (
        <div>
            <li>
            <button onClick={() => handleClick(resultsEntry)}>
            {resultsEntry.name}
            </button>
            </li>
        </div>
    );
}

export default RaceItem