import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import React from 'react';
import CharacterCreation from './Components/CharacterCreation';
import Navbar from './Components/NavBar'
import RaceSelector from './Components/RaceSelector';
import IconSelector from './Components/IconSelector';
import ClassSelector from './Components/ClassSelector';
import Class from './Components/Class';
import EquipmentCategory from './Components/EquipmentCategory';
import Equipment from './Components/Equipment';
import SpellList from './Components/SpellList'
import { Icon, Button, ButtonGroup, TextField, makeStyles } from '@material-ui/core';
import EquipmentDetails from './Components/EquipmentDetails';
import Alignment from './Components/Alignment';


class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    if (this.props.classSelected !== undefined)
    {
      console.log('NAME IN APP ', this.props.classSelected)
      this.state = {
        raceSelected: {},
        classSelected: this.props.classSelected,
        abilitiesSelected: []
      }
    }
    this.state = {
      raceSelected: {},
      classSelected: {},
      abilitiesSelected: []
    }
    this.handleRaceSelection = this.handleRaceSelection.bind(this)
    this.chooseClassCallback = this.chooseClassCallback.bind(this)
  }

  // ***************************************************** ROUTING  *************************************************** //

  // ***************************************************** ENDING  *************************************************** //
  
  // ***************************************************** CALLBACKS *************************************************** //
  handleRaceSelection(input) {

    this.setState({raceSelected: input})
    //console.log("What is this????", input)
    //console.log("this is the race: ", this.state.raceSelected)
  }

  chooseClassCallback(data) {
    console.log('working');
    if (typeof data === 'object')
    {
      this.setState({
        classSelected: data
      })
    }
    else
    {
      console.log('Invalid data type passed to chooseClassCallback() in App.js')
    }
  }
  // ***************************************************** END CALLBACKS *************************************************** //

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact={true} path='/' component={CharacterCreation}/> */}
        <Route path="/alignment">
            <Alignment />
          </Route>
        <Route path="/equipment_categories/equipment/equipment_details">
            <EquipmentDetails />
          </Route>
        <Route path="/equipment_categories/equipment">
            <Equipment />
          </Route>
        <Route path="/equipment_categories">
            <EquipmentCategory />
          </Route>
          <Route path="/class_selection/class">
            <Classes />
          </Route>
          <Route path="/class_selection">
            <ClassSelector raceSelected={this.state.classSelected} handleSelection={this.chooseClassCallback}/>
          </Route>
          <Route path="/icon_selection">
            <IconSelector />
          </Route>
          <Route path="/race_selection">
            <RaceSelector raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection}/>
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/">
            <div className="App">
              <CharacterCreation raceSelected={this.state.raceSelected} classSelected={this.props.classSelected}
              classSelected={this.state.classSelected} chooseClassCallback={this.chooseClassCallback}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
  
}

function Classes(props) {

  
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:className`}>
          <RouteClass />
        </Route>
      </Switch>
    </div>
  );
}

function Spells() {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:className`}>
          <RouteSpells />
        </Route>
      </Switch>
    </div>
  )
}

function RouteClass() {
  
  
  let { className } = useParams();
  return <Class name={className}/>
}

function RouteSpells() {
  let { className } = useParams();
  return <SpellList name={className}/>
}
export default App;
