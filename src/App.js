import './App.css';
import { withRouter } from "react-router";
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
import StarterEquipment from "./Components/StarterEquipment";
import EquipmentList from './Components/EquipmentList';
import EquipmentItem from './Components/EquipmentItem';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSelected: "",
      nameSelected2: "",
      levelSelected: "",
      levelSelected2: "",
      raceSelected: {},
      classSelected: {},
      languagesSelected: [],
      proficienciesSelected: [],
      traitsAssigned: [],
      abilitiesSelected: [],
      alignmentSelected: '',
      abilities: {},
      inventory: [],
      classSelectedCallback: function(data) {globalClassSelectedCallback(data)}
    }

    this.inventory = [];

    this.handleRaceSelection = this.handleRaceSelection.bind(this)
    this.chooseClassCallback = this.chooseClassCallback.bind(this)
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this)
    this.doneChoosingProficienciesAndLanguagesCallback = this.doneChoosingProficienciesAndLanguagesCallback.bind(this);
    this.doneChoosingAbilitiesCallback = this.doneChoosingAbilitiesCallback.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleLevelSubmit = this.handleLevelSubmit.bind(this);
    this.addToInventory = this.addToInventory.bind(this);
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

  handleNameChange(event) {
    this.setState({ nameSelected: event.target.value });
  }

  handleNameSubmit(e) {
    e.preventDefault();
    const name = this.state.nameSelected;
    this.setState({ nameSelected: "", nameSelected2: name });
  }

  handleLevelChange(event) {
    this.setState({ levelSelected: event.target.value });
  }

  handleLevelSubmit(e) {
    e.preventDefault();
    const level = this.state.levelSelected;
    this.setState({ levelSelected: "", levelSelected2: level });
  }

  handleAlignmentSelection(event) {
    const id = event.target.id
    this.setState({ alignmentSelected: id })
    console.log(id)
  }
  
  handleRaceSelection(input) {

    this.setState({raceSelected: input})
    console.log("Race you have selected ", input, " race")
    console.log("raceSelected is: ", this.state.raceSelected)
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

  addToInventory(data) {
    console.log('data in app ', data);
    this.inventory.push(data);

    this.setState({
      inventory: this.inventory
    })
  }
  // ***************************************************** END CALLBACKS *************************************************** //

  
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact={true} path='/' component={CharacterCreation}/> */}
          <Route path="/starter_equipment">
            <StarterEquipment classSelected={this.state.classSelected} />
          </Route>
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
          <Route path="/equipment/:equipmentIndex">
            <EquipmentItem selectCallback={this.addToInventory}/>
          </Route>
          <Route path="/equipment">
            <EquipmentList />
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
                handleNameChange={this.handleNameChange}
                handleNameSubmit={this.handleNameSubmit}
                nameSelected={this.state.nameSelected}
                nameSelected2={this.state.nameSelected2}
                handleLevelChange={this.handleLevelChange}
                handleLevelSubmit={this.handleLevelSubmit}
                levelSelected={this.state.levelSelected}
                levelSelected2={this.state.levelSelected2}
                inventory={this.state.inventory}
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

function RouteEquipmentItem() {
  let { equipmentIndex } = useParams();
  return <EquipmentItem equipmentIndex={equipmentIndex} />
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
