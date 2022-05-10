import {Component} from "react"

class List extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = ()=>{
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <button onClick={this.handleClick}>sumar 1</button>
            
        )
    }
}

export default List