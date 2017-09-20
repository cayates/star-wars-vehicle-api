import React, { Component } from 'react';

export default class Pilot extends Component {

constructor(props){

    super(props);
    this.state = {
        pilot: ''
    }
}

_handleSubmit = (event) => {
    event.preventDefault()
    this.props.nameChange(this.state.pilot)
}

_handleChange = (event) => {
    this.setState({pilot: event.target.value})
}

    render(){
    return(
    <div className = "pilotSection">
        <h1>What is your name, Pilot?</h1>
        <form className = "pilotSearchBar" onSubmit={this._handleSubmit}>
            <input className = "searchBar" type="text" name="pilot" onChange={this._handleChange} placeholder="Enter your name" />
            <br />
            <input className = "submitButton" type="submit" value="Submit" />
            <h3>{this.props.pilot}</h3>
        </form>
    </div>       
    )
}
}