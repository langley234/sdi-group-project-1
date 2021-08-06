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
import ProficiencyOption from './ProficiencyOption';
import Language from './Language';
import AbilitySelection from './Components/AbilitySelection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raceSelected: {},
      classSelected: {},
      languagesSelected: [],
      proficienciesSelected: [],
      traitsAssigned: [],
      abilitiesSelected: [],
      alignmentSelected: '',
      abilities: {},
      classSelectedCallback: function(data) {globalClassSelectedCallback(data)}
    }

    this.handleRaceSelection = this.handleRaceSelection.bind(this)
    this.chooseClassCallback = this.chooseClassCallback.bind(this)
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this)
    this.doneChoosingProficienciesAndLanguagesCallback = this.doneChoosingProficienciesAndLanguagesCallback.bind(this);
    this.doneChoosingAbilitiesCallback = this.doneChoosingAbilitiesCallback.bind(this);
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

  doneChoosingProficienciesAndLanguagesCallback(data)
  {
    console.log('data', data);
    this.setState({
      languagesSelected: data.languages,
      proficienciesSelected: data.proficiencies
    })
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

  doneChoosingAbilitiesCallback(data) {
    console.log('data', data);
    this.setState({
      abilities: data
    })
  }
  // ***************************************************** END CALLBACKS *************************************************** //

  
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact={true} path='/' component={CharacterCreation}/> */}
          <Route path="/alignment">
            <Alignment alignmentSelected={this.state.alignmentSelected} changeAlignment={this.handleAlignmentSelection} />
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
          <Route path="/languages/:languageIndex">
              <RouteLanguage />
          </Route>
          <Route path="/class_selection/:className">
            <RouteClass />
          </Route>
          <Route path="/class_selection">
            <ClassSelector classSelected={this.state.classSelected} handleSelection={this.chooseClassCallback} />
          </Route>
          <Route path="/icon_selection">
            <IconSelector />
          </Route>
          <Route path="/ability_selection">
            <AbilitySelection doneCallback={this.doneChoosingAbilitiesCallback} />
          </Route>
          <Route path="/proficiencies">
            <ProficiencyRoute />
          </Route>
          <Route path="/choose_proficiencies">
            <Proficiencies 
              raceSelected={this.state.raceSelected} 
              doneClickCallback={this.doneChoosingProficienciesAndLanguagesCallback} 
              languagesAlreadyChosen={this.state.languagesSelected} 
              proficienciesAlreadyChosen={this.state.proficienciesSelected} />
          </Route>
          <Route path="/race_selection">
            <RaceSelector raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} traitsAssigned={this.state.traitsAssigned} />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/">
            <div className="App">
              <CharacterCreation 
                raceSelected={this.state.raceSelected} 
                classSelectedCallback={this.props.classSelected}
                classSelected={this.state.classSelected} 
                chooseClassCallback={this.chooseClassCallback} 
                traitsAssigned={this.state.traitsAssigned} 
                alignmentSelected={this.state.alignmentSelected}
                languagesSelected={this.state.languagesSelected}
                proficienciesSelected={this.state.proficienciesSelected}
                abilities={this.state.abilities}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
  
}

function RouteLanguage()
{
  let { languageIndex } = useParams();
  return <Language index={languageIndex}/>
}

function ProficiencyRoute() {
  let match = useRouteMatch();
  return(
    <div>
      <Switch>
        <Route path={`${match.path}/:proficiencyIndex`}>
          <RouteProficiency />
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

function RouteProficiency() {
  let { proficiencyIndex } = useParams();
  return <ProficiencyOption index={proficiencyIndex}/>
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
