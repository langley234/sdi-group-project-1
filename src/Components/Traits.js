import React from 'react';
import { render } from 'react-dom';

class Traits extends React.Component{
    constructor(props){
    super(props)
    this.raceData = props.raceSelected;
    this.name = this.raceData.name
    this.traitsData = [];

    this.state = {
        isLoaded: false
    }
    }
    
    // componentDidMount() {
    //     // if (this.props.selectedRace !== undefined)
    //     fetch("https://api.example.com/items")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     data: result
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error: true
    //                 });
    //             }
    //         )
    //     // else { return an error message to select a race}
    // }
    
    render()
    {
        return (
            
        //         <div>
        //             {
        //                 this.state.isLoaded ?
        //                 <div>Finished Loading</div> :
        //                 <div>Loading</div>
        //             }
        //             {this.name} Traits:
        // {/* <ul>
        //             {
        //                 this.props.traitsAssigned.map((entry) => {
        //                     return <li>{entry.name}</li>
        //                 })

        //             }
        //         </ul> */}
            // </div >
            <div></div>
            
        );
    }
    
}

export default Traits;