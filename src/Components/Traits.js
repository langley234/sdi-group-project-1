import React from 'react';
import NavBar from './NavBar'
import { render } from 'react-dom';


class Traits extends React.Component{
    constructor(props){
    super(props)
    this.raceData = props.raceSelected;
    this.name = this.raceData.name
    

    this.state = {
        isLoaded: false
    }
    // <NavBar/>
    }



    
    render()
    {
        return (
            <div>
             Check the race for the traits
            </div>
            
        );
    }
    
}

export default Traits;
