import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Student} from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      account: this.formBuilder.group({
        email: [''],
        password: ['']
      })
    });
    console.log(this.studentForm);
  }

  public saveFormValue(): Student {
    console.log(this.studentForm.value);
    return this.studentForm.value;
  }
}
