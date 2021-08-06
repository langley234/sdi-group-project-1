import React from 'react';

class Language extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            data: null,
            error: {alert: 'No Error', status: false}
        }

        this.renderName = this.renderName.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }

    componentDidMount() {
        if (this.props.index !== undefined) {
            fetch(`https://www.dnd5eapi.co/api/languages/${this.props.index}`)
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
                            error: { alert: 'Error fetching data', status: true }
                        });
                    }
                )
        } else {
            this.setState({
                isLoaded: true,
                error: { alert: 'this.props.index is not defined and cannot fetch data', status: true }
            })
        }
    }

    renderName() {
        return (
            <div><h3>{this.state.data.name}</h3></div>
        );
    }

    renderDescription(){
        return (
            <div><h4>Description</h4>
                {this.state.data.desc}
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
                        {
                            this.state.error.status ?
                            <div>{this.state.error.alert}</div> :
                            <div>
                                {this.renderName()}
                                {this.renderDescription()}    
                            </div>
                        }
                    </div> :
                    <div>Loading</div>
                }
            </div>
        );
    }
}

export default Language;