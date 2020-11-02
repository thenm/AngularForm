import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  options = [
    {id: 0, value: 'Choose option'},
    {id: 1, value: 'Feedback'},
    {id: 2, value: 'Report a bug'},
    {id: 3, value: 'Feature request'}
  ]

  experience = [
    {id: 1, value: 'bad'},
    {id: 2, value: 'satisfactory'},
    {id: 3, value: 'good'}
  ]

  userData = {
    name: '',
    email: '',
  }

  enquireForm: FormGroup;

  ngOnInit(): void {
    this.enquireForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl("0"),
      'message': new FormControl(null),
      'experience': new FormControl("good"),
      'copy': new FormControl(null),
    })
  }
  
  onSubmit() {
    console.log(this.enquireForm)
  }

  resetForm() {
    
  }

  onSuggestUserName() {
  
  }
}
