import React from 'react'
import './Form.css'

export default class Form extends React.Component {
    state = {
        inputValue: "",
        isActive: true
    }

    changeInput = (e) => {
        const asterix = '*'
        let {isActive, inputValue} = this.state
        
        if (e.target.value.indexOf( asterix) === -1) {
           
                inputValue = e.target.value;
                isActive = true;
        
        } else {
            isActive = false
        }

        this.setState({isActive, inputValue})
    }

    render(){
        const noActive = this.state.isActive
        return(
            <>
            <form>
                <input className={noActive? "active": "noActive"} type="text" name="input" value={this.state.inputValue} onChange={this.changeInput}></input>
            </form>
            <h1>{this.state.inputValue}</h1>
            </>
        )
    }
}