import React from 'react';
import ProficiencyOption from './ProficiencyOption';
import { Link } from "react-router-dom";
class Proficiencies extends React.Component
{
    constructor(props) {
        super(props);

        if (this.props.raceSelected.name == undefined) {
            this.state = ({
                isRaceValid: false,
                isLoaded: false,
                data: null,
                chosenLanguages: [],
                chosenProficiencies: [],
                error: { alert: 'Race Needs to be selected', status: true }
            })
        }
        else {
            this.state = ({
                isRaceValid: true,
                isLoaded: false,
                data: null,
                chosenLanguages: [],
                chosenProficiencies: [],
                error: { alert: '', status: false }
            })
        }

        this.proficiencyChoicesAllowed = 0;
        this.languageChoicesAllowed = 0;

        this.chosenProficiencies = [];
        this.chosenLanguages = [];

        this.renderLanguages = this.renderLanguages.bind(this);
        this.renderLanguageChoicesButtons = this.renderLanguageChoicesButtons.bind(this);
        this.renderStartingProficiencies = this.renderStartingProficiencies.bind(this);
        this.renderProficiencyOptions = this.renderProficiencyOptions.bind(this);
        this.handleLanguageChoices = this.handleLanguageChoices.bind(this);
        this.handleProficiencyChoice = this.handleProficiencyChoice.bind(this);
        this.alreadyHasLanguage = this.alreadyHasLanguage.bind(this);
        this.removeLanguageChoice = this.removeLanguageChoice.bind(this);
        this.alreadyHasProficiency = this.alreadyHasProficiency.bind(this);
        this.removeProficiencyChoice = this.removeProficiencyChoice.bind(this);
    }

    componentDidMount() 
    {
        if (this.state.isRaceValid) {
            fetch(`https://www.dnd5eapi.co/api/races/${this.props.raceSelected.index}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.language_options !== undefined)
                            this.languageChoicesAllowed = parseInt(result.language_options.choose)

                        if (result.starting_proficiency_options !== undefined)
                            this.proficiencyChoicesAllowed = parseInt(result.starting_proficiency_options.choose);
                        
                        this.setState({
                            isLoaded: true,
                            data: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: false,
                            error: {alert:`An error occurred while fetching the data`, status:true}
                        });
                    }
                )
        }
    }

    handleLanguageChoices(choice) {
        if (this.alreadyHasLanguage(choice))  
            this.removeLanguageChoice(choice);
        else if (this.chosenLanguages.length < this.languageChoicesAllowed)
        {
            this.chosenLanguages.push(choice);
        }
            
        this.setState({
            chosenLanguages: this.chosenLanguages
        })
    }

    handleProficiencyChoice(choice) {
        if (this.alreadyHasProficiency(choice))
            this.removeProficiencyChoice(choice);
        else if (this.chosenProficiencies.length < this.proficiencyChoicesAllowed) {
            this.chosenProficiencies.push(choice);
        }

        this.setState({
            chosenProficiencies: this.chosenProficiencies
        })
    }

    renderLanguages() {
        return (
            <ul><h3>Languages</h3>
                {this.state.data.languages.map((item) => {
                    return <li>{item.name}</li>
                })}
            </ul>
        );
    }

    alreadyHasProficiency(item) {
        for (let i = 0; i < this.state.chosenProficiencies.length; i++)
        {
            if (this.state.chosenProficiencies[i].index === item.index)
                return true;
        }
        return false;
    }

    alreadyHasLanguage(item) {
        for (let i = 0; i < this.state.chosenLanguages.length; i++)
        {
            if (this.state.chosenLanguages[i].index === item.index)
                return true;
        }
        return false;
    }

    removeLanguageChoice(choice) {
        let index = -1;
        for (let i = 0; i < this.chosenLanguages.length; i++ )
        {
            if (choice.index === this.chosenLanguages[i].index)
                index = i;
        }

        if (index !== -1)
            this.chosenLanguages.splice(index, 1);
    }

    removeProficiencyChoice(choice) {
        let index = -1;
        for (let i = 0; i < this.chosenProficiencies.length; i++ )
        {
            if (choice.index === this.chosenProficiencies[i].index)
                index = i;
        }

        if (index !== -1)
            this.chosenProficiencies.splice(index, 1);
    }

    renderLanguageChoicesButtons(item) {
        return (
            <div>
                {
                    this.alreadyHasLanguage(item) ?
                    <button onClick={ () => {this.handleLanguageChoices(item)} }>Deselect</button> :
                    <button onClick={ () => {this.handleLanguageChoices(item)} }>Select</button>
                }
                
            </div>
        );
    }

    renderProficiencyChoiceButtons(item){
        return (
            <div>
                {
                    this.alreadyHasProficiency(item) ?
                    <button onClick={ () => {this.handleProficiencyChoice(item)} }>Deselect</button> :
                    <button onClick={ () => {this.handleProficiencyChoice(item)} }>Select</button>
                }
                
            </div>
        );
    }

    renderLanguageChoices() {
        return (
            <div>
                <h3>Language Options</h3>
                {
                    this.state.data.language_options !== undefined ?
                        <ul><h4>{`Choose ${this.state.data.language_options.choose}`}</h4>
                            {
                                this.state.data.language_options.from.map((item) => {
                                    return <div>
                                        <Link to={`/languages/${item.index}`}><li>{`${item.name}`}</li></Link>
                                        {this.renderLanguageChoicesButtons(item)}
                                    </div>
                                })
                            }
                        </ul> :
                        <div>No Language Options Available</div>
                }
                
            </div>
        );
    }

    renderStartingProficiencies() {
        return (
            <div><h3>Starting Proficiencies</h3>
                {
                    this.state.data.starting_proficiencies.length > 0 ?
                    <div>{this.state.data.starting_proficiencies.map((item) => {
                        return <li>{item.name}</li>
                    })}</div> :
                    <div>No Starting Proficiencies</div>
                }
            </div>
        );
    }

    renderProficiencyOptions() {
        return (
            <div>
                <h3>Proficiency Options</h3>
                {
                    this.state.data.starting_proficiency_options !== undefined ?
                        <div><h4>{`Choose ${this.state.data.starting_proficiency_options.choose}`}</h4>
                            {
                                
                                this.state.data.starting_proficiency_options.from.map((item) => {
                                    return <div>
                                        <Link to={`/proficiencies/${item.index}`}><div>{item.name}</div></Link>
                                        {this.renderProficiencyChoiceButtons(item)}
                                    </div>
                                })
                            }
                        </div> :
                        <div>No Options Available</div>
                }
                
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
                            {
                                this.state.isRaceValid ?
                                    <div>
                                        <h2>{`${this.state.data.name}`}</h2>
                                        <ul>
                                            {this.renderLanguages()}
                                            {this.renderStartingProficiencies()}
                                            {this.renderProficiencyOptions()}                                        
                                            {this.renderLanguageChoices()}
                                            <Link to="/"><button>Back</button></Link>                          
                                            <Link to="/"><button onClick={ () => {this.props.doneClickCallback(
                                                {languages: this.state.chosenLanguages, proficiencies: this.state.chosenProficiencies})}}>Done</button></Link>
                                        </ul>
                                    </div> :
                                    <div>Race is not valid</div>
                            }

                        </div> :
                        <div>Select A Character Race Before Choosing Proficiencies</div>
                }
            </div>
        );
    }
}

export default Proficiencies;