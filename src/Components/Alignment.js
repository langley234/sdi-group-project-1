import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import { Button, ButtonGroup } from '@material-ui/core'

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
                    this.setState({ alignmentData: [...this.state.alignmentData, res] })
                })
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Select your Alignment: </h1>
                <ul>
                {this.state.alignmentData.map(data => {
                    return <li>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            {/* <Button id={data.name} onClick={this.props.changeAlignment} type='submit' variant='contained' size='small' color='primary' >{data.name}</Button> */}
                            <button id={data.name} onClick={this.props.changeAlignment}>{data.name}</button>
                        </Link>
                        <p>{data.desc}</p>
                    </li>
                })}
                </ul>
                <div>
                </div>
            </div>

        )
    }
}

export default Alignment