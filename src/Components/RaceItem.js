import React from 'react';

function RaceItem ({raceName, key}){
    //raceName = this.state.racesData.results.name;



    return (
        <div>
            <button>
            {raceName}
            </button>
        </div>
    );
}

export default RaceItem