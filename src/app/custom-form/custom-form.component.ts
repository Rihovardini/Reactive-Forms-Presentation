import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  @Input() public accountFormGroup: FormGroup;

  ngOnInit() {
    this.setValidators();
  }

  public passwordValidator(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    return password === confirmPassword ? null : { notMatch: true };
  }

  private setValidators(): void {
    this.accountFormGroup.setValidators(this.passwordValidator);
  }

}
