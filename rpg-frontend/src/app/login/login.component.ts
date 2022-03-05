import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isTemplateSpan } from 'typescript';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  onSubmit(): void {
    console.warn('Zalogowano lub nie zalogowano. Jak dorobimy backend to się okaże.');
    this.checkoutForm.reset();
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
