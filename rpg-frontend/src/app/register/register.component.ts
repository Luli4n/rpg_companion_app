import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isTemplateSpan } from 'typescript';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    password: '',
    rep_password: ''
  });

  onSubmit(): void {
    console.warn('Zarejestrowano lub nie zarejestrowano. Jak dorobimy backend to się okaże.');
    this.checkoutForm.reset();
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
