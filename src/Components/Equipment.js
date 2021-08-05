import React from 'react'
import {Link} from 'react-router-dom'

class Equipment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const equipmentArray = this.props.equipmentArray

        return (
            <div>
                <Link to={{
                    pathname: "/equipment_details",
                    state: { equipmentArray: equipmentArray }
                }}>
                    {this.props.equipmentName}
                </Link>
            </div>
        )
    }
}
export default Equipment