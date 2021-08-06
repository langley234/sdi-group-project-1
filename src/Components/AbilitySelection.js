import React from 'react';
import NavBar from './NavBar';
import { Link } from "react-router-dom";

class AbilitySelection extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        let totals = [];

        for (let i = 0; i < 6; i++) {
            let rolls = [];
            for (let j = 0; j < 4; j++) {
                let rndInt = Math.floor(Math.random() * 6) + 1;
                rolls.push(rndInt);
            }

            let min = Math.min(...rolls);
            rolls.splice(rolls.indexOf(min), 1);
            let x = rolls.reduce((a, b) => a + b, 0)

            totals.push(x);
        }

        this.setState({
            strength: totals[0],
            dexterity: totals[1],
            constitution: totals[2],
            intelligence: totals[3],
            wisdom: totals[4],
            charisma: totals[5]
        })
    }

    render()
    {
        return (
            <div>
                <NavBar /> 
                    <h2>{`Strength : ${this.state.strength}`}</h2>
                    <h2>{`Dexterity : ${this.state.dexterity}`}</h2>
                    <h2>{`Constitution : ${this.state.constitution}`}</h2>
                    <h2>{`Intelligence : ${this.state.intelligence}`}</h2>
                    <h2>{`Wisdom : ${this.state.wisdom}`}</h2>
                    <h2>{`Charisma : ${this.state.charisma}`}</h2>
                    <button onClick={this.rollDice}>Roll Stats</button>
                    <Link to="/"><button onClick={ () => 
                        {this.props.doneCallback({strength: this.state.strength,
                                                  dexterity: this.state.dexterity,
                                                  constitution: this.state.constitution,
                                                  intelligence: this.state.intelligence,
                                                  wisdom: this.state.wisdom,
                                                  charisma: this.state.charisma })} }>Done</button></Link>
            </div>
        );
    }   
}

export default AbilitySelection;