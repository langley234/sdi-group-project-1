import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";

class EquipmentDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.location.state.equipmentArray.map(array => {
    //         fetch(`https://www.dnd5eapi.co${array.url}`)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //     })
    // }

    render() {
        const {equipmentArray} = this.props.location.state

        return (
            <div>
                <NavBar/>
                <h1>Select your equipment: </h1>
                <ul>
                    {equipmentArray.map(equipmentData => {
                    return (
                        <li>
                            <button>{equipmentData.name}</button>
                        </li>
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(EquipmentDetails)