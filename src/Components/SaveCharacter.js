import Navbar from './NavBar'

class Save extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
}

/*
import CharacterCreation from './CharacterCreation'

const download = document.getElementById('download')
const blob1 = new Blob(['File saved as a ', 'PDF!'], { type: 'text/plain'})
download.href = URL.createObjectURL(blob1)
*/