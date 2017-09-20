import React, { Component } from 'react';

export default class Vehicles extends Component {
    render(){
    return(
        <div className = "starWarsVehicles">
            <h3>Name: {this.props.name}</h3>
            <h4>Model: {this.props.model}</h4>
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

{/* <div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-block">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}