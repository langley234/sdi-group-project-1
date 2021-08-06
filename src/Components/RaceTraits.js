import React from 'react';
import {Link} from 'react-router-dom'

function RaceTraits ({entry, i}){
    console.log(entry)
        return (
            <div>
                <li>
                {entry.name}
                </li>
            </div>
        );
    }


export default RaceTraits;