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

export default App;
