import React from 'react';

class ProficiencyOption extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: 'No Error', status: false}
        }
    }

    componentDidMount() {
        if (this.props.index !== undefined) {
            fetch(`https://www.dnd5eapi.co/api/proficiencies/${this.props.index}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            data: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: {alert: 'Error fetching data for this proficiency', status: true}
                        });
                    }
                )
        } else {
            this.setState({
                isLoaded: true,
                error: {alert: 'this.props.index is undefined, could not fetch data', status: true}
            })
        }
        
    }

    render()
    {
        return (
            <div>
                {
                    this.state.isLoaded ?
                        <div>
                            {
                                this.state.error.status ?
                                    <div>{this.state.error.alert}</div> :
                                    <div>
                                        <h2>{this.state.data.name}</h2>
                                        <h3>{this.state.data.type}</h3>
                                    </div>
                            }
                        </div> :
                        <div></div>
                }
            </div>
        );
    }
}

export default ProficiencyOption;