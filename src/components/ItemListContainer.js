
import {Component} from "react"
import ItemCount from './ItemCount'

class Titulo extends Component {
    render(){
        return(
            <p>{this.props.titulo}</p>
            
        )
    }
}
class Lista extends Component {
    render(){
        return(
            <div>
            <Titulo titulo="The Wall"></Titulo>
            <ItemCount stock={7} initial={1}></ItemCount>
            
            </div>

            
        )
    }
}



export default Lista