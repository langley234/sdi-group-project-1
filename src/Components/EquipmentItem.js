import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import NavBar from './NavBar';

class EquipmentItem extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: 'No Error', status: false}
        }
        this.index = '';

        this.resolveItemIndex = this.resolveItemIndex.bind(this);
        this.renderEquipmentItemData = this.renderEquipmentItemData.bind(this);
    }

    componentDidMount() 
    {
        this.resolveItemIndex();
        console.log('INDEX : ', this.index);
        fetch(`https://www.dnd5eapi.co/api/equipment/${this.index}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: {alert: `Unable to fetch data for this piece of equipment`, status:true}
                    });
                }
            )
    }

    resolveItemIndex() {
        let url = String(window.location.href);
        let index = url.lastIndexOf(`/`);
        this.index = url.slice(index + 1);
    }   

    renderEquipmentItemData() {
        return (
            <div>
                <h2>{this.state.data.name}</h2>
                <h3>{`Equipment Category`}</h3>
                {
                    this.state.data.equipment_category.name !== undefined ?
                    <h4>{this.state.data.equipment_category.name}</h4> :
                    <h4>No Name</h4>
                }
                
                <h3>{`Gear Category`}</h3>
                {
                    this.state.data.gear_category !== undefined ?
                    <h4>{this.state.data.gear_category.name}</h4> :
                    <h4>No Gear Category</h4>
                }
                <h3>{`Cost`}</h3>
                {
                    this.state.data.cost.quantity !== undefined ?
                    <h4>{`${this.state.data.cost.quantity} ${this.state.data.cost.unit}`}</h4> :
                    <h4>No Cost</h4>
                }    
                <h3>{`Weight`}</h3>
                {
                    this.state.data.weight !== undefined ?
                    <h4>{`${this.state.data.weight} lbs`}</h4> :
                    <h4>No Weight</h4>
                }
                
                <Link to="/"><button onClick={ () => { this.props.selectCallback(this.state.data)} }>Select</button></Link>
            </div>
        );
    }

    render()
    {
        return (
            <div>
                <NavBar/>
                {
                    this.state.isLoaded ?
                    <div>
                        {this.renderEquipmentItemData()}
                    </div> :
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

export default EquipmentItem;