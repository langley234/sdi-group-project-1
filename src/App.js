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
import { Icon } from '@material-ui/core';
import EquipmentDetails from './Components/EquipmentDetails';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.state = {
      raceSelected: {},
      classSelected: {},
      abilitiesSelected: []
    }
  }

  render() {
    return (
      <Router>
        <Switch>
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
            <ClassSelector />
          </Route>
          <Route path="/icon_selection">
            <IconSelector />
          </Route>
          <Route path="/race_selection">
            <RaceSelector />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/">
            <div className="App">
              <CharacterCreation />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
  
}

function Classes() {
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
