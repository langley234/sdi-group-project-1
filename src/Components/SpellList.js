import React from 'react';

class SpellList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            data: null,
            isLoaded: false,
            error: {alert: 'No Error', status:false}
        }

        this.renderSpellChoices = this.renderSpellChoices.bind(this);
    }

    componentDidMount() {
        if (this.props.name !== undefined && typeof this.props.name === 'string') {
            fetch(`https://www.dnd5eapi.co/api/classes/${this.props.name.toLowerCase()}/spells`)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.error === undefined) {
                            this.setState({
                                isLoaded: true,
                                data: result.results
                            });
                        } else {
                            this.setState({
                                isLoaded: false,
                                error: {alert: 'Failed to fetch data', status:true}
                            })
                        }
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: { alert: `Unknown error occured when fetched data for ${this.props.name} ` }
                        });
                    }
                )
        }
        else {
            this.setState({
                isLoaded: false,
                error: { alert: `No name was provided to fetch data for or name provided is not a string`, status: true }
            })
        }
    }
    
    renderSpellChoices()
    {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map( (item) => {
                            return <div>{`${item.name}`}</div>
                        })
                    }
                </ul>
            </div>
        );
    }

    render()
    {
        return (
            <div>
                {
                    this.state.isLoaded ?
                            <div>
                                <b>{`${this.props.name.toUpperCase()} Spells`}</b>
                                {this.renderSpellChoices()}
                            </div> :
                        <div>
                            {
                                this.state.error.status === true ?
                                <div>{`There was an error loading the page : ${this.state.error.alert}`}</div> :
                                <div>Unknown error occured</div>
                            }
                        </div>
                }
            </div>
        );
    }
}

export default SpellList;