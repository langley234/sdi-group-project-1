import '../App.css';
import React from "react";
import { makeStyles, Button, ButtonGroup, ThemeProvider, createTheme, Padding } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import SaveIcon from '@material-ui/icons/Save'
import Home from '@material-ui/icons/Home'
import Autorenew from '@material-ui/icons/Autorenew'
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})

class NavBar extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <header class="topnav">
                        <ButtonGroup variant="contained" color="primary">
                            <Link to='/'>
                                <Button startIcon={<Home />} size="large"> Home </Button>
                            </Link>
                            <Link to='/SaveCharacter'>
                                <Button startIcon={<SaveIcon />} size="large">
                                    Save Character
                                </Button>
                            </Link>
                            <Link to='/LoadCharacter'>
                                <Button startIcon={<Autorenew />} size="large"> Load Character </Button>
                            </Link>
                        </ButtonGroup>
                </header>
            </div>
        )
    }
}


export default NavBar;