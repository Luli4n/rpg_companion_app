import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isTemplateSpan } from 'typescript';
import { RouterModule } from '@angular/router';
import { ElementsManagementComponent } from '../elements-management/elements-management.component';
import { elems } from '../../sample_elem';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  username='TwojaNazwa';
  welcomeString="Witaj ";
  constructor() { }

  ngOnInit(): void {
    this.welcomeString=this.welcomeString.concat(this.username);
  }

}
