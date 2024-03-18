import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SignupHttpService} from "./SignupHttpService";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private signupHttpService: SignupHttpService) {
  }

  ngOnInit(): void {

    this.signupForm = new FormGroup<any>({
      'firstname': new FormControl(null, [Validators.required, this.validateCustomWay.bind(this)]),
      'lastname': new FormControl(null, [Validators.required, this.validateCustomWay.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email, this.validateCustomWay.bind(this)]),
      'pwd': new FormControl(null, [Validators.required]),
    });

    this.signupForm.addControl('pwdconfirm', new FormControl(null,
      [Validators.required, this.validatePasswordConfirmation.bind(this)]));

    this.signupForm.controls.pwd.addValidators([Validators.required, this.validatePassword.bind(this)]);

    // -- setting default value
    // this.signupForm.patchValue({
    //   'firstname': 'John'
    // })
  }

  onSubmit() {
    //console.log(this.signupForm.value);
    console.log(this.signupForm.valid);
    console.log(this.signupForm.value.firstname);
    console.log(this.signupForm.value.lastname);
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.pwd);
    console.log(this.signupForm.value.pwdconfirm);

    const userregistration = {
      firstName: this.signupForm.value.firstname,
      lastName: this.signupForm.value.lastname,
      email: this.signupForm.value.email,
      password: this.signupForm.value.pwd
    };

    this.signupHttpService.postUserRegistration(userregistration);

    console.log(userregistration);

    this.signupForm.reset();
  }

  validateCustomWay(control: FormControl): {[s:string]: boolean} {
    // if (control.value === -1)
    //   return {'nameIsForbidden': true}
    return null;
  }

  validatePassword(control: FormControl): {[s:string]: boolean} {
    if (control.value === this.signupForm.value.pwdconfirm)
      this.signupForm.get('pwdconfirm').setErrors(null);
    return null;
  }

  validatePasswordConfirmation(control: FormControl): {[s:string]: boolean} {
    if (control.value !== this.signupForm.value.pwd)
      return {'pwdsdonotmatch': true}
    return null;
  }
}
