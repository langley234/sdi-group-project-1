import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import RaceSelector from './RaceSelector';
import { makeStyles, Button, ButtonGroup, TextField, Typography } from '@material-ui/core'
import Traits from './Traits.js'

const useStyles = makeStyles ({
    field: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px'
    }
})

function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.field}></Button>
}

class CharacterCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render()
    {
        console.log('NAME IN CHARACTER CREATIOn : ', this.props.classSelected)
        return (
            <div>
                <ButtonStyled />
                <div><NavBar /></div>
                <Typography variant='h4'>
                    CHARACTER CREATION COMPONENT PLACEHOLD TEXT
                </Typography>

                <Link to='/icon_selector'>
                    <Button variant='contained' color='primary' href='/icon_selection'>Icon</Button>
                </Link>

                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Character Name"
                />

                <Link to='/race_selection'>
                    <Button variant='contained' color='primary' href='/race_selection'>Race</Button>
                </Link>

                <div>Selected Race: {`${this.props.raceSelected.name}`} </div>
                
                <div><Link to="/class_selection" classSelectedCallback={this.props.classSelectedCallback}><Button variant='contained' color='primary'>Class</Button></Link></div>

                <div>Selected Class: {`${this.props.classSelected.index}`} </div>

                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Level"
                />

                <Link to='/alignment'>
                    <Button variant='contained' color='primary'>Alignment</Button>
                </Link>
                
                <p>Selected Alignment: {this.props.alignmentSelected}</p>
                
                <Typography variant='h5'>
                    Armor/HP/Speed
                </Typography>
                
                <Link to="/equipment_categories"><Button variant='contained' color='primary'>Equipment</Button></Link>
                
                <Link to="/proficiencies"><Button variant='contained' color='primary'>Proficiencies/Languages</Button></Link>
                
                <Typography variant='h5'>
                    Abilities
                </Typography>

                <Typography variant='h5'>
                    Treasure/Inventory
                </Typography>

                <Typography variant='h5'>
                    Skills
                </Typography>

                <Typography variant='h5'>
                    Features/Traits:
                </Typography>

                <div>
                    <Traits raceSelected={this.props.raceSelected} traitsAssigned={this.props.traitsAssigned}/>
                </div>
            </div>
        );
    }
}

export default CharacterCreation