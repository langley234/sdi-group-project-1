import React from 'react';
import NavBar from './NavBar'
import { Link } from "react-router-dom";

class EquipmentList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: 'No Error', status:false}
        }

        this.renderEquipment = this.renderEquipment.bind(this);
    }

    componentDidMount()
    {
        fetch("https://www.dnd5eapi.co/api/equipment")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: {alert: 'Error fetching equipment data', status: true}
                    });
                }
            )
    }

    renderEquipment()
    {
        return (
            <div>
                <h2>Equipment</h2>
                {
                    this.state.data.map((item) => {
                        return <Link to={`/equipment/${item.index}`}><h4>{item.name}</h4></Link>
                    })
                }
            </div>
        );
    }
    
    render(){
        return (
            <div>
                <NavBar/>
                {
                    this.state.isLoaded ?
                    <div>{this.renderEquipment()}</div> :
                    <div>Loading</div>
                }
            </div>
           
        );
    }
}

export default EquipmentList;