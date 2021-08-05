import React from 'react'
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
                <h1>this is equipment</h1>
                {this.state.equipmentCategoriesData.map(obj => {
                    // console.log(obj.equipment)
                    return <Equipment equipmentName={obj.name} equipmentArray={obj.equipment}/>
                })}
            </div>
        )
    }

}
export default withRouter(EquipmentCategory)