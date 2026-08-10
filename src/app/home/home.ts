import { FlightModel } from './../models/flight.model';
import axios from 'axios';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  flights = signal<FlightModel[]>([]);

  constructor() {
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
      .then(rsp=>this.flights.set(rsp.data))
  }
}
