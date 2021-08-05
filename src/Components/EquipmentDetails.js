import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";

class EquipmentDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {equipmentArray} = this.props.location.state

        console.log(equipmentArray)
        return (
            <div>
                {equipmentArray.map(equipmentData => {
                    return <button>{equipmentData.name}</button>
                })}
            </div>
        )
    }
}

export default withRouter(EquipmentDetails)