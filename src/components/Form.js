import React from 'react'
import './Form.css'

export default class Form extends React.Component {
    state = {
        inputValue: "",
    }

    changeInput = (e) => {
        this.setState({inputValue: e.target.value})
    }
    render(){
        return(
            <>
            <form>
                <input  type="text" name="input" value={this.state.inputValue} onChange={this.changeInput}></input>
            </form>
            <h1>{this.state.inputValue}</h1>
            </>
        )
    }
}