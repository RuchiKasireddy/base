import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  loginForm: FormGroup;
  isPasswordMatch: boolean = false;

		
  constructor(private fb: FormBuilder, private dashboardService: DashboardService,
	private _snackBar: MatSnackBar,
	private router: Router) { }
  
  ngOnInit(): void {
    this.initResetForm()
  }
  initResetForm() {
		this.loginForm = this.fb.group({
			email: ['', Validators.compose([
				// Validators.required,
				Validators.email,
				Validators.minLength(3),
				// https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
				Validators.maxLength(320)
			]),
			],
			// otp: ['', Validators.compose([
			// 	Validators.required,
			// 	Validators.minLength(6),
			// 	Validators.maxLength(6)
			// ]),
			// ],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(100),
			])
			],
			confirmPassword: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(100)
			])
			],
		}, {
			// validator: ConfirmPasswordValidator.MatchPassword
		});
	}
  submit(){
      const controls = this.loginForm.controls;
      /** check form */
      if (this.loginForm.invalid) {
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );
        return;
      }
      if(controls['password'].value != controls['confirmPassword'].value){
        this.isPasswordMatch = true
        return 
      }
      // this.loading = true;
  
      const authData = {
        email: controls['email'].value,
        password: controls['password'].value,
      };

	  this.dashboardService.forgotPassword(authData).subscribe((res:any) => {
		  if(Object.entries(res).length){
			  this.openSnackBar()
				console.log("hello mahi reddy ", res);
			   this.router.navigateByUrl("/")
		  }

	  })
      
  }
  isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

	durationInSeconds = 5;

  openSnackBar() {
	  this.dashboardService.msg = 'Password changed successfully.'
    this._snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}


