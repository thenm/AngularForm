import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  formSubmitted: boolean = false;

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
  // Setting a default expression for the Experience radio buttons
  defaultExp = "good";

  //Two way binding using [(ngModel)]
  name = "";
  userData = {
    name: '',
    email: '',
  }

  @ViewChild('enquireForm') enquireForm: NgForm

  ngOnInit(): void {
  }
  
  onSuggestUserName() {
    // Using setValue but this not the correct way to update the single value. This would reset other value if set by user.
    // this.enquireForm.setValue({
    //   name: 'LazyAss',
    //   email: '',
    //   subject: '',
    //   message: '',
    //   experience: '',
    //   copy: 'true'
    // })

    this.enquireForm.form.patchValue({
      name: 'MoreLazyAss'
    })
  }


  onSubmit() {
    console.log(this.enquireForm);
    this.formSubmitted = true
    this.userData = JSON.parse(JSON.stringify(this.enquireForm.value))
  }
  

  resetForm() {
    this.enquireForm.reset();
  }
}
