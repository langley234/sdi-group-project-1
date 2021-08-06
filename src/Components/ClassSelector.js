import React from 'react';
import Class from './Class';
import NavBar from './NavBar'
import { Link } from "react-router-dom";
import '../classSelector.css';

class ClassSelector extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: '', status: false}
        }

        this.handleClassSelected = this.handleClassSelected.bind(this);
        this.renderClassChoices = this.renderClassChoices.bind(this);

        this.classes = [];
    }

    // ******************************************************* CALLBACKS ****************************************** //
    handleClassSelected(data){
        console.log('data ', data);
        this.props.handleSelection(data);
    }
    // *****************************************************END CALLBACKS ***************************************** //

    componentDidMount()
    {
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then((result) => {
                if (result.error) {
                    this.setState({
                        isLoaded: true,
                        error: { alert: 'Invalid fetch call (bad url or api issue)', status: true }
                    })
                } else {
                    if (Array.isArray(result.results)) {
                        Promise.all(
                            result.results.map((item) => {
                                return fetch(`https://www.dnd5eapi.co${item.url}`)
                                    .then(res => res.json())
                                    .then((result) => {
                                        this.classes.push(result);
                                    })
                            })
                        )
                            .then(() => {
                                this.setState({
                                    isLoaded: true,
                                    data: this.classes
                                })
                            })
                    } else {
                        this.setState({
                            isLoaded: true,
                            error: { alert: 'Data retrieved from the api is not valid and could not be processed', status: true }
                        })
                    }
                }
            },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error: { alert: 'Error fetching class data', status: true }
                    })
                }
            )
    }

    renderClassChoices()
    {
        return (
            <div className="all-class-choices">{
                this.classes.map((item) => {
                    return <div 
                            className="classChoice">
                            <p className="class-name-text">{item.name}</p>
                            <img src="" alt="" ></img>
                            <Link to={{ pathname: `class_selection/${item.index}` }}><p className="class-more-info-text">More Info</p></Link>
                            <Link to={{ pathname: `/`, selectedClass: item.name }}>
                                <button className="button_slide slide_left" 
                                        onClick={(e) => { return this.handleClassSelected(item) }}>Select
                                </button>
                            </Link>
                    </div>
                })
            }</div>
        );
    }

    render() {
        return (
            <div>
                <NavBar/>
                {
                    !this.state.isLoaded ?
                        <h1>Loading</h1> :
                        this.state.error.status ?
                            <div>{`Something bad happened : ${this.state.error.alert}`}</div> :
                            this.renderClassChoices()
                }
            </div>
        );
    }
}

export default ClassSelector;