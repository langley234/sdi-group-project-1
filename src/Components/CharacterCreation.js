import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import RaceSelector from './RaceSelector';
import { makeStyles, Button, ButtonGroup, TextField, Typography, Grid, Divider, createTheme, Input } from '@material-ui/core'
import UISettings from './UISettings'
import Traits from './Traits.js'
import StarterEquipment from "./StarterEquipment";

class CharacterCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            languagesSelected: this.props.languagesSelected,
            proficienciesSelected: this.props.proficienciesSelected,
            race: this.props.raceSelected,
            abilities: this.props.abilities,
            inventory: this.props.inventory
        }

        console.log('PROPS RACE : ', this.props.raceSelected)
        this.renderLanguagesChosen = this.renderLanguagesChosen.bind(this);
        this.renderProficienciesChosen = this.renderProficienciesChosen.bind(this);
        this.renderAbilityScores = this.renderAbilityScores.bind(this);
        this.renderCurrentInventory = this.renderCurrentInventory.bind(this);
    }

    // ***************************************************** RENDER FUNCTIONS *************************************************** //
    renderLanguagesChosen() {
        return (
            <ul><h3>Current Chosen Languages</h3>
                {this.state.languagesSelected.map((item) => {
                    return <li><h4>{item.name}</h4></li>
                })}
            </ul>
        );
    }

    renderProficienciesChosen() {
        return (
            <ul><h3>Current Chosen Proficiencies</h3>
                {this.state.proficienciesSelected.map((item) => {
                    return <li><h4>{item.name}</h4></li>
                })}
            </ul>
        );
    }

    renderAbilityScores() {
        let helperRender = () => {
            console.log('ABILITIES ', this.state.abilities);
            let arr = [];

            for (let key in this.state.abilities) {
                arr.push({ name: key, value: this.state.abilities[key] })
            }

            return (
                <div>
                    {
                        arr.length > 0 ?
                            <ul>{arr.map((item) => {
                                return <li>{`${item.name} : ${item.value}`}</li>
                            })}</ul> :
                            <div>No Ability Scores Yet</div>
                    }

                </div>
            );
        }

        return (
            <ul><h3>Current Ability Scores</h3>
                {helperRender()}
            </ul>
        );
    }
    
    renderCurrentInventory() {
        console.log('data in char create ', this.state.inventory)
        return (
            <div><h3>Current Inventory</h3>
                {
                    this.state.inventory.map((item) => {
                        return <div>{item.name}</div>
                    })
                }
            </div>
        );
    }
    // ***************************************************** END RENDER FUNCTIONS *************************************************** //

    render() {
        console.log('NAME IN CHARACTER CREATIOn : ', this.props.classSelected)
        const levelSelected2 = this.props.levelSelected2
        const nameSelected2 = this.props.nameSelected2
        return (
            <div>
                <NavBar />
                <Typography variant='h4'>
                    <header>DnD Character Creation</header>
                </Typography>
                <div>
                    <Grid container spacing={0}>
                        <Grid xs={12}>
                            {/* <Link to='/icon_selector'>
                                <Button variant='contained' color='primary' >Icon</Button>
                            </Link> */}
                            <Divider />
                            <form onSubmit={this.props.handleNameSubmit}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    color="secondary"
                                    label="Character Name"
                                    value={this.props.nameSelected}
                                    onChange={this.props.handleNameChange}
                                />
                                <Button type='submit' variant='contained' color='primary' >Submit</Button>
                            </form>
                            <p>Name: {nameSelected2 ? nameSelected2 : 'Has not been selected'}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to='/race_selection' style={{ textDecoration: 'none' }}>
                                <Button variant='contained' color='primary' >Race</Button>
                            </Link>
                            <div>Selected Race :
                                {
                                    this.state.race.race !== undefined ?

                                        <p>{console.log('CHERHEHRHEHRHEHRHERH')}{this.state.race.race.name}</p> :
                                        <p>Has not been selected</p>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div><Link to="/class_selection" classSelectedCallback={this.props.classSelectedCallback} style={{ textDecoration: 'none' }}><Button variant='contained' color='primary'>Class</Button></Link>

                                <p>Selected Class: {`${this.props.classSelected.name ? this.props.classSelected.name : 'Has not been selected'}`}</p></div>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to='/alignment' style={{ textDecoration: 'none' }}>
                                <Button variant='contained' color='primary'>Alignment</Button>
                            </Link>

                            <p>Selected Alignment: {`${this.props.alignmentSelected ? this.props.alignmentSelected : 'Has not been selected'}`}</p>
                        </Grid>
                        <Grid>

                        </Grid>
                        <Grid>

                        </Grid>
                        <Grid>

                        </Grid>

                    </Grid>
                </div>
                <div>
                    <form onSubmit={this.props.handleLevelSubmit}>
                        <TextField
                            InputProps={{
                                inputProps: {
                                    max: 100, min: 0
                                }
                            }}
                            size='small'
                            type='number'
                            variant="outlined"
                            color="secondary"
                            label="Level"
                            value={this.props.levelSelected}
                            onChange={this.props.handleLevelChange}
                        />
                        <Button type='submit' variant='contained' color='primary' >Submit</Button>
                    </form>
                    <p>Level: {levelSelected2 ? levelSelected2 : 'Has not been selected'}</p>
                </div>

                <Typography variant='h5'>
                    <Link to="/ability_selection" style={{ textDecoration: 'none' }}><Button variant='contained' color='primary' >Ability Selection</Button></Link>
                </Typography>
                {this.renderAbilityScores()}

                <Link to="/equipment" style={{ textDecoration: 'none' }} >
                    <Typography variant='h5'>
                        <Button variant='contained' color='primary' >Treasure / Inventory Selection</Button>
                    </Typography>
                </Link>
                {this.renderCurrentInventory()}
                <div>
                    <StarterEquipment classSelected={this.props.classSelected} />
                </div>

                {/* <Typography variant='h5'>
                    Armor/HP/Speed
                </Typography> */}

                {/* <Link to="/equipment_categories"><Button variant='contained' color='primary'>Equipment</Button></Link> */}

                <Link to="/choose_proficiencies" style={{ textDecoration: 'none' }} ><Button variant='contained' color='primary'>Proficiencies/Languages</Button></Link>
                {this.renderLanguagesChosen()}
                {this.renderProficienciesChosen()}

                <Typography variant='h5'>
                    Skills
                </Typography>

                <Typography variant='h5'>
                    Features/Traits:
                </Typography>

                <div>
                    <Traits raceSelected={this.props.raceSelected} traitsAssigned={this.props.traitsAssigned} />
                </div>

            </div>
        );
    }
}

export default CharacterCreation