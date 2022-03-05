import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { elems } from '../../sample_elem';

@Component({
  selector: 'app-creating-game-template',
  templateUrl: './creating-game-template.component.html',
  styleUrls: ['./creating-game-template.component.css']
})
export class CreatingGameTemplateComponent implements OnInit {
  active = 1;
  elems = elems;

  constructor(private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    tags: ''
  });

  onSubmitMusic(): void {
    console.warn('Muzyka zostala dodana', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  onSubmitSound(): void {
    console.warn('Dzwiek zostal dodany', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  onSubmitBackground(): void {
    console.warn('Tlo zostalo dodane', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  onSubmitIcon(): void {
    console.warn('Ikona zostala dodana', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


  ngOnInit(): void {
  }

}
