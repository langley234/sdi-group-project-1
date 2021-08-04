import '../App.css';
import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'


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
                        <Button
                            size="large">
                                Home
                        </Button>
                        <Button
                            size="large">
                                Edit Character
                        </Button>
                        <Button
                            startIcon={<SaveIcon />}
                            size="large">
                                Save Character
                        </Button>
                        <Button
                            size="large">
                                Load Character
                        </Button>
                    </ButtonGroup>
                </header>
            </div>
        )
    }
}
/*
<button class="active" href="#home">Home</button>
<button href="#contact">Edit Character</button>
<button href="#about">Load Character</button>
<button href="#about">Save Character</button>
*/

export default NavBar;