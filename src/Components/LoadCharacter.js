import NavBar from './NavBar'

class Load extends React.Component {
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
const input =
document.querySelector('input[type="file')
input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()
    reader.onLoad = function () {
    const img = new Image()

    img.src =reader.result
    canvas.toBlob(function (blob) {

    })
    img.src =reader.result
    }
    reader.readAsText(input.file[0])
    reader.readAsDataURL
}, false)
*/