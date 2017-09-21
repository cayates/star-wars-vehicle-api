import React, { Component } from 'react';

export default class Vehicles extends Component {
    render(){
    return(
        <div className = "card col-md-3">
            <h3>Name: {this.props.name}</h3>
            <h4>Model: {this.props.model}</h4>
            <h3>Specs</h3>
                <p>Manufacturer: {this.props.manufacturer}</p>
                <p>Vehicle Class: {this.props.vehicle_class}</p>
                <p>Passengers: {this.props.passengers}</p>
                <p>Crew: {this.props.crew}</p>
                <p>Length: {this.props.length}</p>
                <p>Max Speed: {this.props.max_atmosphering_speed}</p>
                <p>Cargo capacity: {this.props.cargo_capacity}</p>
        </div>
    )
    }
}