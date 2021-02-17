import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  isPasswordVisible = false;
  isConfirmPasswordVisible = false;

  percentageOfFillProgress = 0;

  emailFill = 0;
  usernameFill = 0;
  passwordFill = 0;
  confirmPassFill = 0;

  // @ViewChild('passwordField', {static: false}) passwordField: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService, private router: Router) {
  }

  // read about form builder in angular docs
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

  // ngAfterViewInit() {
  //   console.log(this.passwordField.nativeElement.type);
  // }


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

  getErrorFromArray(errorMessage: any): any[] {
    return errorMessage.shift().messages;
  }

  // @ViewChild
  changePassVisible(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    // console.log(this.passwordField.nativeElement.type);
  }

  changeConfirmPassVisible(): void {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  // emailFill = 0;
  // usernameFill = 0;
  // passwordFill = 0;
  // confirmPassFill = 0;

  changeValueProgressBar(element: any): void {

    console.log(element);

    if (this.form.get('email').invalid === true) {
      console.log('invalid is true');
      this.emailFill = 0;
      // if (th)
      // this.percentageOfFillProgress = this.percentageOfFillProgress - 25;
      this.calculate(this.emailFill);
    } else {
      if (this.emailFill === 0) {
        console.log('Y-haaaaaaaaa!');
        // this.percentageOfFillProgress = this.percentageOfFillProgress + 25;
        this.emailFill = +1;
        console.log(this.emailFill);
        this.calculate(this.emailFill);
      }
    }


  }

  calculate(email): void {
    if (email === 1) {
      this.percentageOfFillProgress = this.percentageOfFillProgress + 25;
    } else {
      this.percentageOfFillProgress = this.percentageOfFillProgress - 25;
    }
  }
}
