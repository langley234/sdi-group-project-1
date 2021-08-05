import React from 'react';
import { render } from 'react-dom';

class Traits extends React.Component{
    constructor(props){
    super(props)
    this.raceData = props.raceSelected;
    this.name = this.raceData.name
    this.traitsData = [];
    }
    

    


    render()
    {
        return (
            <div>
                {this.name} Traits:
                {/* <ul>
                    {
                        this.props.traitsAssigned.map((entry) => {
                            return <li>{entry.name}</li>
                        })

                    }
                </ul> */}
            </div>
        );
    }
    
}

export default Traits;