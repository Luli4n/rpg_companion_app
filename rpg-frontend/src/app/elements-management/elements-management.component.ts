import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isTemplateSpan } from 'typescript';

import { elems } from '../../sample_elem';

@Component({
  selector: 'app-elements-management',
  templateUrl: './elements-management.component.html',
  styleUrls: ['./elements-management.component.css']
})
export class ElementsManagementComponent implements OnInit {
  active = 1;
  elems = elems;

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
