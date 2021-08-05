import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/Textfield'
import RaceSelector from './RaceSelector';
import { makeStyles } from '@material-ui/core/styles'

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
                <div><Link to="/class_selection"><button>Class</button></Link></div>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Level"
                />
                <div>Alignment</div>
                <div>Armor/HP/Speed</div>
                <Link to='/equipment_categories'>
                    <div>Equipment</div>
                </Link>
                <div>Proficiencies/Languages</div>
                <div>Abilities</div>
                <div>Treasure/Inventory</div>
                <div>Skills</div>
                <div>Features/Traits</div>
            </div>
        );
    }
}

export default CharacterCreation