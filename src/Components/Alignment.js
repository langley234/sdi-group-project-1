import React from 'react'
import {Link} from 'react-router-dom'

class Alignment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alignmentData: [],
        }
    }

    componentDidMount() {
        fetch('https://www.dnd5eapi.co/api/alignments')
        .then(res => res.json())
        .then(res => res.results)
        .then(res => {
            res.map(alignmentData => {
                fetch(`https://www.dnd5eapi.co/${alignmentData.url}`)
                .then(res => res.json())
                .then(res => {
                    // const dataArray = [];
                    // dataArray.push(res)
                    this.setState({ alignmentData: [...this.state.alignmentData, res] })
                })
            })
        })
    }

    render() {
        // console.log(this.state.alignmentData)
        return (
            <div>
                <h1>Select your Alignment: </h1>
                <ul>
                {this.state.alignmentData.map(data => {
                    return <li>
                        <Link to='/'>
                            <button id={data.name} onClick={this.props.changeAlignment}>{data.name}</button>
                        </Link>
                        <p>{data.desc}</p>
                    </li>
                })}
                </ul>
                <div>
                    <Link to="/">
                    <button>back</button>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Alignment