import { Component, OnInit } from '@angular/core';
import {SeatdataService} from "../seatdata.service";

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  constructor(private seatsservice:SeatdataService) { }

  ngOnInit() {
  }
  seats =this.seatsservice;
  public isActive:boolean = false;
  get(seat: { s: number }) {
    console.log(seat.s);
    this.isActive = !this.isActive;
  }
}

