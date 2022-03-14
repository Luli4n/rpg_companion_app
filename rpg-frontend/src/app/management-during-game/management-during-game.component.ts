import { Component, OnInit ,ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

import { elems } from '../../sample_elem';

@Component({
  selector: 'app-management-during-game',
  templateUrl: './management-during-game.component.html',
  styleUrls: ['./management-during-game.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementDuringGameComponent implements OnInit {

  elems = elems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
