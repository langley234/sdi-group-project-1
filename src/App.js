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

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <div className="App">
              Let's get to work people...
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
