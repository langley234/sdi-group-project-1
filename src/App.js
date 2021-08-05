import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  useContext,
  useState
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
import EquipmentDetails from './Components/EquipmentDetails';
import Alignment from './Components/Alignment';
import Proficiencies from './Proficiencies';
import { ForumOutlined } from '@material-ui/icons';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raceSelected: {},
      classSelected: {},
      traitsAssigned: [],
      abilitiesSelected: [],
      alignmentSelected: '',
      classSelectedCallback: function(data) {globalClassSelectedCallback(data)}
    }


    this.handleRaceSelection = this.handleRaceSelection.bind(this)
    this.chooseClassCallback = this.chooseClassCallback.bind(this)
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this)
    //globalClassSelectedCallback(null, this.state.classSelectedCallback);
  }

 

  //****************************************************** HOOKS *******************************************//
  /*
  function handleChange() {

    const [class, setClass] = useState(0)
    const [race, setRace] = useState(0)
    const [alignment, setAlignment] = useState(0)
    const [equipment, setEquipment] = useState(0)
    const [spells, setSpells] = useState(0)
    const [icon, setIcon] = useState(0)
  
    return (
      
    )
  }

  const classContext = createContext(class)

  classInfo () {
    const class = useContext ()
    return {class}
  }
  */

  // ***************************************************** ROUTING  *************************************************** //

  // ***************************************************** ENDING  *************************************************** //
  
  // ***************************************************** CALLBACKS *************************************************** //

  handleAlignmentSelection(event) {
    const id = event.target.id
    this.setState({ alignmentSelected: id })
    console.log(id)
  }
  
  handleRaceSelection(input) {

    this.setState({raceSelected: input})
    console.log("What is this????", input)
    fetch(`https://www.dnd5eapi.co${input.url}`)
    .then(response => response.json())
    .then(data => console.log("the traits have been pulled"))
    //console.log("this is the race: ", this.state.raceSelected)
  }

  chooseClassCallback(data) {
    console.log('working');
    if (typeof data === 'object')
    {
      this.setState({
        classSelected: data,
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
            <Alignment alignmentSelected={this.state.alignmentSelected} changeAlignment={this.handleAlignmentSelection}/>
          </Route>
        <Route path="/equipment_details">
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
            <ClassSelector classSelected={this.state.classSelected} handleSelection={this.chooseClassCallback} />
          </Route>
          <Route path="/icon_selection">
            <IconSelector />
          </Route>
          <Route path="/proficiencies">
            <Proficiencies raceSelected={this.state.raceSelected}/>
          </Route>
          <Route path="/race_selection">
            <RaceSelector raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} traitsAssigned={this.state.traitsAssigned}/>
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/">
            <div className="App">
              <CharacterCreation raceSelected={this.state.raceSelected} classSelectedCallback={this.props.classSelected}
              classSelected={this.state.classSelected} chooseClassCallback={this.chooseClassCallback} traitsAssigned={this.state.traitsAssigned} alignmentSelected={this.state.alignmentSelected}
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

function globalClassSelectedCallback(data, func)
{
  if (typeof globalClassSelectedCallback.callback == 'undefined' ){
    globalClassSelectedCallback = func;
  }

  console.log(globalClassSelectedCallback.callback);
  
  if (data !== null)
    globalClassSelectedCallback.callback(data);
}

function RouteSpells() {
  let { className } = useParams();
  return <SpellList name={className}/>
}
export default App;
