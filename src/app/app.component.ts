import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { Student} from './Student';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

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
        email: ['', [Validators.required], [this.emailAsyncValidator]],
        password: [''],
        confirmPassword: ['']
      })
    });
    this.studentForm.valueChanges.subscribe(val => {
      console.log(this.studentForm, 'studentForm');
    });
  }

  public emailAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return of(email === 'angular@ukr.net').pipe(
      delay(4000),
      map(result => result ? { dublicate: true } : null)
    );
  }

  public saveFormValue(): Student {
    console.log(this.studentForm.value, 'studentForm Value');
    return this.studentForm.value;
  }
}
