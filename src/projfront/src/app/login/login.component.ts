import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
  isPasswordMatch: boolean = false;
  isloadinSpnnier = false
  isloading = true
  constructor(private fb: FormBuilder, private router: Router,
	private dashboardService: DashboardService,
	private _snackBar: MatSnackBar,
    private spinnerService: NgxUiLoaderService
	
	) { }

  ngOnInit(): void {
	  if(localStorage.getItem('user')){
		 this.router.navigateByUrl("/Dashboard")
	  }
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
				Validators.minLength(3),
				Validators.maxLength(100),
			])
			],
			// confirmPassword: ['', Validators.compose([
			// 	Validators.required,
			// 	Validators.minLength(8),
			// 	Validators.maxLength(100),
			// 	Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
			// ])
			// ],
		}, {
			// validator: ConfirmPasswordValidator.MatchPassword
		});
	}
  submit(){
    console.log("kdjksdcksnj");
    
      const controls = this.loginForm.controls;
      /** check form */
      if (this.loginForm.invalid) {
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );
        this.isPasswordMatch = true
        return;
      }
  
      // this.loading = true;
	  this.isloadinSpnnier = true
      const authData = {
        email: controls['email'].value,
        password: controls['password'].value,
      };
     this.dashboardService.signIn(authData).subscribe((res:any) => {
		 
		 if(res.message){
			this.isPasswordMatch = true
			this.dashboardService.msg = res.message
			this.openSnackBar()
			this.isloadinSpnnier = false
			return
		 }
		 localStorage.setItem('user',JSON.stringify(res))
		 this.isloadinSpnnier = false
		 this.isloading = false
		 this.spinnerService.start();
		 setTimeout(() => {
			 this.router.navigateByUrl("/Dashboard")
			 this.spinnerService.stop();
		 }, 1000);
	}) 
	

  }
  openSnackBar() {
	this._snackBar.openFromComponent(ToastComponent, {
		duration: 4000,
	});
}
  isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
