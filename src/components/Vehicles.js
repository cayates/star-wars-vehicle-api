import React, { Component } from 'react';

export default class Vehicles extends Component {
    render(){
    return(
        <div className = "card col-md-3 card-outline-primary mb-3">
            <h3>Name: {this.props.name}</h3>
            <h4>Model: {this.props.model}</h4>
            <div className = "card outline-primary mb-6">
            <ul className="list-group">
            <h4>Specs</h4>
                <li className="list-group-item">Manufacturer: {this.props.manufacturer}</li>
                <li className="list-group-item">Vehicle Class: {this.props.vehicle_class}</li>
                <li className="list-group-item">Passengers: {this.props.passengers}</li>
                <li className="list-group-item">Crew: {this.props.crew}</li>
                <li className="list-group-item">Length: {this.props.length}</li>
                <li className="list-group-item">Max Speed: {this.props.max_atmosphering_speed}</li>
                <li className="list-group-item">Cargo capacity: {this.props.cargo_capacity}</li>
            </ul>
            </div>
        </div>
    )
    }
}