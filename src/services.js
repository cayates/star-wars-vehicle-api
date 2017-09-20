import axios from 'axios';

export function getVehicles(){
    return axios.get(`https://swapi.co/api/vehicles`)
}
