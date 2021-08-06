import React from 'react';
import {
    Link
  } from "react-router-dom";

class Class extends React.Component
{
    constructor(props)
    {
        super(props);

        if (this.props.data !== undefined) {
            this.state = {
                clicked: false,
                isLoaded: true,
                data: props.data,
                error: { alert: '', status: false }
            }
        } else
        {
            this.state = {
                clicked: false,
                isLoaded: false,
                data: null,
                error: {alert: '', status: false}
            }
        }

        this.renderProficiencies = this.renderProficiencies.bind(this);
        this.renderStartingEquipment = this.renderStartingEquipment.bind(this);
        this.renderProficiencyChoices = this.renderProficiencyChoices.bind(this);
        this.renderChoices = this.renderChoices.bind(this);
        this.renderSubClasses = this.renderSubClasses.bind(this);
        this.renderHitDie = this.renderHitDie.bind(this);
        this.renderSavingThrows = this.renderSavingThrows.bind(this);
        this.renderSpellChoices = this.renderSpellChoices.bind(this);
    }

    componentDidMount()
    {   
        // if data was not provided, the component must fetch its own data
        if (this.props.data === undefined && this.props.name !== undefined)
        {
            let name = this.props.name;
           
            fetch(`https://www.dnd5eapi.co/api/classes/${name.toLowerCase()}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result in class ', result);
                        this.setState({
                            isLoaded: true,
                            data: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: {alert: 'An Error occurred loading data for the class', status:true}
                        });
                    }
                )
        }
    }

    renderProficiencies()
    {
        return (
            <div>
                <ul><b>Proficiencies</b>
                    {
                        this.state.data.proficiencies.map((item) => {
                            return <div>{`${item.name}`}</div>
                        })
                    }
                </ul>
            </div>
        );
    }

    renderProficiencyChoices()
    {
        return (
            <div>
                <ul><b>Proficiency Choices</b>
                    {
                        this.state.data.proficiency_choices.map( (item) => {
                            return <div>{`Choose ${item.choose} From ${item.from.map( (fromItem) => { return fromItem.name })}`}</div>
                        })
                    }
                </ul>
            </div>
        );
    }

    renderSpellChoices()
    {
        let name = this.props.name;

        return (
            <Link to={`/spells/${name.toLowerCase()}`} >
                <div>Spell Choices</div>
            </Link>
        );
    }

    renderChoices(item) {
        let x = item.from.map((fromItem) => {
            for (let key in fromItem.equipment) {
                if( key === 'name')
                    return `${fromItem.equipment[key]}`
            }
        });

        return x;
    }

    renderSavingThrows()
    {
        return (
            <div>
                <ul><b>Saving Throws</b>
                    {
                        this.state.data.saving_throws.map( (item) => {
                            return <div>{`${item.name}`}</div>
                        })
                    }
                </ul>
            </div>
        );
    }

    renderStartingEquipment()
    {    
        return (
            <div>
                <ul><b>Starting Equipment Choices</b>
                    {
                        this.state.data.starting_equipment_options.map((item) => {
                            return <li>{`${item.choose} Choice : Type : ${item.type} From ${this.renderChoices(item)}`}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    renderHitDie()
    {
        return (
            <div>{`Hit Die : ${this.state.data.hit_die}`}</div>
        );
    }

    renderSubClasses()
    {
        return (
            <div>
                <ul><b>Subclasses</b>
                    {this.state.data.subclasses.map((item) => {
                        return <div>{item.name}</div>
                    })}
                </ul>
            </div>
        );
    }

    render()
    {
        
        return (
            <div>
                {
                    this.state.isLoaded ?
                    <div>
                        <b>{this.state.data.name}</b>
                        {this.renderProficiencies()}
                        {this.renderProficiencyChoices()}
                        {this.renderSpellChoices()}
                        {this.renderHitDie()}
                        {this.renderStartingEquipment()}
                        {this.renderSubClasses()}
                        {this.renderSavingThrows()}
                        <Link to="/class_selection"><button>Back</button></Link>
                    </div> :
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

export default Class;