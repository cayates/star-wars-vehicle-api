
import React, {Component} from 'react';
import '../styles/App.css';

import Header from './Header';
import Pilot from './Pilot';
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


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return (
      <div className="App">
        {
          
        }
        <Header />
        <Pilot 
          pilot={this.state.pilot}
          nameChange={this._handleNameChange}
        />
      </div>
    );
  }
}

export default App;