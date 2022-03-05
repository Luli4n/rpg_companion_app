import { Component, OnInit } from '@angular/core';

import { elems } from '../../sample_elem';

@Component({
  selector: 'app-browsing-game-templates',
  templateUrl: './browsing-game-templates.component.html',
  styleUrls: ['./browsing-game-templates.component.css']
})
export class BrowsingGameTemplatesComponent implements OnInit {
  elems = elems;
  constructor() { }

  ngOnInit(): void {
  }

}
