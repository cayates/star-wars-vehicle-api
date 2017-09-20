
import React, {Component} from 'react';
import '../styles/App.css';

import Header from './Header';
import Pilot from './Pilot';
import Vehicles from './Vehicles'
import {getVehicles} from '../services'

class App extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        vehicles: [],
        value: "",
        pilot: ""
      }
  }

  _handleNameChange = (pilot) => {
    console.log(pilot) 
    this.setState({pilot: pilot})
  }

  populateVehicles = () =>{
    getVehicles().then((response)=>{
    console.log(response)

      this.setState({vehicles: response.data.results})
    })
  console.log(getVehicles)
  }
  
  componentDidMount(){
    this.populateVehicles()
  }

  render() {

    return (
      <div className="App">
        {
          
        }
        <Header />
        <Pilot 
          pilot={this.state.pilot}
          nameChange={this._handleNameChange}
        />
        <div className = "vehicleCard">
        {this.state.vehicles.map((vehicleSpecs) => {        
          return(
          <Vehicles
            key={vehicleSpecs.name}
            name={vehicleSpecs.name}
            model={vehicleSpecs.model}
            manufacturer={vehicleSpecs.manufacturer}
            vehicle_class={vehicleSpecs.vehicle_class}
            passengers={vehicleSpecs.passengers}
            crew={vehicleSpecs.crew}
            length={vehicleSpecs.length}
            max_atmosphering_speed={vehicleSpecs.max_atmosphering_speed}
            cargo_capacity={vehicleSpecs.cargo_capacity}
          />
          )
          })}
        </div>
      </div>
    );
  }
}

export default App;