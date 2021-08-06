import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import Equipment from './Equipment'
import { withRouter } from "react-router-dom";

class EquipmentCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            equipmentCategories: [],
            equipmentCategoriesData: [],
        }
    }

    componentDidMount() {
        fetch('https://www.dnd5eapi.co/api/equipment-categories')
        .then(res => res.json())
        .then(res => {
            const equipmentCategoryNames = [];
            for (let equipObj of res.results) {
                equipmentCategoryNames.push(equipObj.name)
            }
            return equipmentCategoryNames;
        })
        .then(names => {
            const indexEquipmentnames = [];
            this.setState({ equipmentCategories: names })
            for (let name of names) {
                indexEquipmentnames.push(name.toLowerCase().replace(/\s/g, '-').replace(/'/g, '').replace(/,/g, ''))
            }
            return indexEquipmentnames;
        })
        .then(names => {
            for (let name of names) {
                fetch(`https://www.dnd5eapi.co/api/equipment-categories/${name}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ equipmentCategoriesData: [...this.state.equipmentCategoriesData, data] })
                })
            }
        })
    }


    render() {
        return (
            <div>
                <NavBar/>
                <h1>Select an equipment category: </h1>
                <ul>
                    {this.state.equipmentCategoriesData.map(obj => {
                    return <li><Equipment equipmentName={obj.name} equipmentArray={obj.equipment}/></li>
                    })}
                </ul>
                <div>
                    <Link to="/">
                    <button>back</button>
                    </Link>
                </div>
            </div>
        )
    }

}
export default withRouter(EquipmentCategory)