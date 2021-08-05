import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/Textfield'
import RaceSelector from './RaceSelector';
import { makeStyles } from '@material-ui/core/styles'
import Traits from './Traits.js'

const useStyles = makeStyles ({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px'
    }
})

function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.root}></Button>
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
                <div><h1>CHARACTER CREATION COMPONENT PLACEHOLD TEXT</h1></div>
                <div><Link to="/icon_selection"><button>Icon</button></Link></div>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Character Name"
                />
                <div><Link to='/race_selection'><button>Race</button></Link></div>
                <div>Selected Race: {`${this.props.raceSelected.name}`} </div>
                <div><Link to="/class_selection" chooseClassCallback={this.props.chooseClassCallback}><button>Class</button></Link></div>
                <div>Selected Class: {`${this.props.classSelected}`} </div>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Level"
                />
                <Link to='/alignment'>
                    <div>Alignment</div>
                </Link>
                <div>Armor/HP/Speed</div>
                <Link to='/equipment_categories'>
                    <button>Equipment</button>
                </Link>
                <div>Proficiencies/Languages</div>
                <div>Abilities</div>
                <div>Treasure/Inventory</div>
                <div>Skills</div>
                <div>Features/Traits:</div>
                <div>
                    <Traits raceSelected={this.props.raceSelected}/>
                </div>
            </div>
        );
    }
}

export default CharacterCreation