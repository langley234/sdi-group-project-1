import React from 'react';

class ClassSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: '', status: false}
        }

        this.classes = [];
    }

    componentDidMount()
    {
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then((result) => {
                Promise.all(
                    result.results.map((item) => {
                        console.log('promising');
                        fetch(`https://www.dnd5eapi.co${item.url}`)
                            .then(res => res.json())
                            .then((result) => {
                                this.classes.push(result);
                            })
                    })
                );
            })
            .then(() => {
                console.log("DONE");
                console.log('array ', this.classes);
                this.setState({
                    isLoaded: true,
                    data: this.classes
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error: { alert: 'Error fetching class data', status: true }
                    })
                })
    }

    render()
    {
        return (
            <div>
                {
                    this.state.isLoaded ?
                        <ul>
                            <h1>Done</h1>
                            {this.state.data.map((item) => {
                                return <li>{`say something dammit`}</li>
                            })}
                        </ul> :
                        <div>
                            <h1>Loading</h1>
                        </div>
                }
            </div>
        );
    }
}

export default ClassSelector;