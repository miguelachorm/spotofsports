import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.sass']
})
export class LeagueListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  country: string;
 
  teams = [
    { flag: 'usa', 
      country: 'USA' },
    { flag: 'nic', 
      country: 'Nicaragua' },
    { flag: 'ven', 
      country: 'Venezuela' },
    { flag: 'peru', 
      country: 'Peru' },
    { flag: 'sal', 
      country: 'El Salvador'}
  ];
}