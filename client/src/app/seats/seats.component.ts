import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


seats =[
  {
    "s": 1,
  },
  {
    "s": 2,
  },
  {
    "s": 3,
  },
  {
    "s": 4,
  } ,
  {
    "s": 5,
  },
  {
    "s": 6,
  },
  {
    "s": 7,
  },
  {
    "s": 8,
  },
  {
    "s": 9,
  } ,
  {
    "s": 10,
  },
  {
    "s": 11,
  },
  {
    "s": 12,
  },
  {
    "s": 13,
  },
  {
    "s": 14,
  } ,
  {
    "s": 15,
  },
  {
    "s": 16,
  },
  {
    "s": 17,
  },
  {
    "s": 18,
  },
  {
    "s": 19,
  } ,
  {
    "s": 20,
  },
  {
    "s": 21,
  },
  {
    "s": 22,
  }]
  public sum:number=0;

  get(seat: { s: number }) {
      console.log(seat.s);

  }
/*  get(seat: { s: number }, param2: any) {
    param2.style.backgroundColor = "red";
    console.log(seat.s);

  }*/
}

