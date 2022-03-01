import { Component, OnInit } from '@angular/core';

import { elems } from '../../sample_elem';

@Component({
  selector: 'app-management-during-game',
  templateUrl: './management-during-game.component.html',
  styleUrls: ['./management-during-game.component.css']
})
export class ManagementDuringGameComponent implements OnInit {

  elems = elems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
