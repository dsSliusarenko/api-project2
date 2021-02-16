import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './My.validators';
import {AuthService} from '../autorization-section/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  isRegistered = false;
  errors: any[];

  constructor(private authService: AuthService, private router: Router) {
  }

  // form builder in docs
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      passwords: new FormGroup({

        password: new FormControl(null, [
          Validators.minLength(7),
          Validators.required
        ]),

        confirmPass: new FormControl(null, [])
      }, {validators: MyValidators.confirmPass})

    });
  }


  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const email = this.form.get('email').value;
    const username = this.form.get('username').value;
    const password = this.form.get('passwords').get('password').value;

    // replace on interface ^
    this.authService.registration(email, username, password).subscribe(
      () => {
        this.isRegistered = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
      },
      error => {
        this.errors = this.getErrorFromArray(error.error.message);
      }
    );
  }

  clearForm(): void {
    this.form.reset();
  }

  getErrorFromArray(errorMessage: any): any[]{
    return errorMessage.shift().messages;
  }
}
