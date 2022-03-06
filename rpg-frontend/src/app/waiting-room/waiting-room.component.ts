import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { elems } from '../../sample_elem';

@Component({
  selector: 'app-waiting-room-templates',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent implements OnInit {
  elems = elems;
  constructor(private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    playername: '',
  });

  ngOnInit(): void {
  }
  
  onSubmitUser(): void {
    console.warn('Gracz został dodany', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
