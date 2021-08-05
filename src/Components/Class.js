import React from 'react';

class Class extends React.Component
{
    constructor(props)
    {
        super(props);

        if (this.props.data !== undefined) {
            this.state = {
                clicked: false,
                isLoaded: true,
                error: { alert: '', status: false }
            }
        } else
        {
            this.state = {
                clicked: false,
                isLoaded: false,
                error: {alert: '', status: false}
            }
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.renderProficiencies = this.renderProficiencies.bind(this);
    }

    componentDidMount()
    {   
        // if data was not provided, the component must fetch its own data
        if (this.props.data === undefined && this.props.name !== undefined)
        {
            fetch(`https://www.dnd5eapi.co/api/classes/${this.props.name}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result ', result);
                        this.setState({
                            isLoaded: true,
                            items: result.items
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    handleClick()
    {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderProficiencies()
    {
        return (
            <ul><b>Proficiencies</b>
                {
                    this.props.data.proficiencies.map((item) => {
                        return <div>{`${item.name}`}</div>
                    })
                }
            </ul>
        );
    }

    render()
    {
        return (
            <div onClick={this.handleClick}>
                {
                    this.state.isLoaded ?
                    <div>loaded</div> :
                    <div>not loaded</div>
                }
            </div>
        );
    }
}

export default Class;