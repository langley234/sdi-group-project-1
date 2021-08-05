import React from 'react';

class Traits extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            raceData = props.raceSelected;
            name = raceData.name
            traitsData = {};
        }
    }
    
    
    fetch(`https://www.dnd5eapi.co${raceData.url}`)
    .then(response => response.json())
    .then(data => this.setState({traitsData: data}))
    .then(() => console.log(this.state.traitsData.traits[0].name))
    

    render(){
        return (
            <div>
                {name} Traits:
                
                {
            props.traitsData === undefined ?
                <p>
                    {name} 
                </p> 
            :
                <ul>
                    {
                        
                        traitsData.traits.map((entry) => {
                            return <li>{entry.name}</li>
                        })
                        
                    }
                </ul>
            }

            </div>
        );
    }
}

export default Traits;