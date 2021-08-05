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

import { Icon } from '@material-ui/core';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
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

function RouteClass() {
  console.log('ROUTING');
  let { className } = useParams();
  console.log('CLASS NAME: ', className);
  return <Class name={className}/>

}
export default App;
