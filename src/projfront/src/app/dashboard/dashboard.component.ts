import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { EditUserComponent } from '../edit-user/edit-user.component'
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { discardPeriodicTasks } from '@angular/core/testing';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReviewPopupComponent } from '../review-popup/review-popup.component';
import { ToastComponent } from '../toast/toast.component';
import { DailyServeyPopupComponent } from '../daily-survey-popup/daily-survey-popup.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { BnNgIdleService } from 'bn-ng-idle';
export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	@ViewChild('paginator') paginator: MatPaginator;
	@ViewChild('paginator1') paginator1: MatPaginator;

	piePlant: any = {}
	piePlant1: any = {}

	selectedTab: any = 1;
	onboardForm: FormGroup;
	emailform: FormGroup;
	allPatients: any[] = [];
	allConditios: any[] = [];
	allPatientsChartData: any[];
	CompletedSource = new MatTableDataSource([]);
	pendingSource = new MatTableDataSource([]);
	getallPatients = new MatTableDataSource([]);
	allPatientsDataSource = new MatTableDataSource([])
	loggedInUser:any = JSON.parse(localStorage.getItem('user') || '{}');
	alldailyReport: any;

	constructor(private dashboardService: DashboardService,
		private fb: FormBuilder,
		public dialog: MatDialog,
		private changeDetectorRef: ChangeDetectorRef,
		private _snackBar: MatSnackBar,
		private router: Router,
		private bnIdle: BnNgIdleService
		) {
			this.bnIdle.startWatching(300).subscribe((res) => {
				if(res) {
					localStorage.removeItem('user')
					window.location.href = "/"
				}
			  })
		}


	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	managedisplayedColumns: string[] = ['position', 'name', 'email', 'weight', 'age', 'phoneNumber', 'symbol'];
	esdisplayedColumns: string[] = ['position', 'name', 'date', 'weight', 'symbol'];
	dataSource = ELEMENT_DATA;
	ngOnInit(): void {

		if (!localStorage.getItem('user')) {
			this.router.navigateByUrl("/")
		}
		if (this.loggedInUser.user.type == 1 && !this.isToday(this.loggedInUser.userData.date))
			this.offboardDialog([], true)
		this.subcriptions()
		this.initResetForm()

		this.tabCahnged()
		setTimeout(() => {
			
		}, 1000);
	}
	isToday(someDate: any) {
		const today = new Date()
		return new Date(someDate).getDate() == today.getDate() &&
		new Date(someDate).getMonth() == today.getMonth() &&
		new Date(someDate).getFullYear() == today.getFullYear()
	}
	
	tabCahnged() {
		this.dashboardService.alertListChanged.subscribe(res => this.selectedTab = res)
	}

	takeSurvey(): void {
		this.loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
		if(!this.isToday(this.loggedInUser.userData.date)){
			const dialogRef = this.dialog.open(DailyServeyPopupComponent, {
				width: '750px',
				height: '450px',
			});
			dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				console.log(result);
				if (result == 'yes') {
					this.subcriptions()
					this.dashboardService.msg = 'Survey submitted successfully.'
					this.openSnackBar()
				}
			});
		}
		else{
			this.dashboardService.msg = 'The survey has already been completed'
			this.openSnackBar()
		}
	}
	
	openDialog(e: any): void {
		const dialogRef = this.dialog.open(EditUserComponent, {
			width: '550px', height: "300px",
			data: { user: e, condition: this.allConditios }
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			console.log(result);
			if (result == 'yes') {
				this.subcriptions()
				this.dashboardService.msg = 'Patient details have been saved.'
				this.openSnackBar()
			}
		});
	}

	openReviewDialog(e: any) {
		const dialogRef = this.dialog.open(ReviewPopupComponent, {
			width: '500px', height: "350px",
			data: e
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			console.log(result);
			if (result == 'yes') {
				this.subcriptions()
			}
		});
	}
	subcriptions() {
		this.dashboardService.getAllConditios().subscribe((res: any) => {
			this.allConditios = res
			this.prepareDate()
		})
		this.dashboardService.getAllPatients().subscribe((res: any) => {
			this.allPatients = res.filter((f:any) => f.DoctorId._id == this.loggedInUser.userData._id)
			this.prepareDate()
		})
		this.dashboardService.getAlldailyReport().subscribe((res: any) => {
			this.CompletedSource.data = res.filter((f: any) => f.reviewStatus && this.isToday(f.createdAt)).reverse()
			this.pendingSource.data = res.filter((f: any) => !f.reviewStatus).reverse()
			this.alldailyReport = res?.filter((f: any) => this.isToday(f.createdAt)).reverse()
			this.prepareDate()
		})
		this.dashboardService.getallPatients().subscribe((res: any) => {
			res = res.filter((f:any) => f.DoctorId._id == this.loggedInUser.userData._id)
			var d = new Date();
			d.setDate(d.getDate() - 1)
			this.allPatientsDataSource.data = res
			this.allPatientsDataSource.paginator = this.paginator;
			this.getallPatients.data = res.filter((f: any) => f.date < new Date(d).toISOString())
		})

	}
	prepareDate() {
		this.allPatientsChartData = []
		let dic: any = {}
		this.allPatients?.forEach(e => {
			let index = this.allConditios.findIndex(f => f._id == e.conditionId._id)
			if (index != -1) {
				if (dic[e.conditionId._id])
					dic[e.conditionId._id] += 1
				else
					dic[e.conditionId._id] = 1
			}
		});
		let data: any = []
		this.allConditios.forEach(e => {
			data.push({ name: e.name, value: dic[e._id] ? dic[e._id] : 0 })
		})
		this.prepareCahrt2(data)
		let data1:any = []
		let dummy = {
			'Pending': 0,
			'Completed': 0
		}
		this.alldailyReport?.forEach((e: any) => {
			if(e.reviewStatus){
				dummy.Completed +=1
			}
			// data.push({ name: e.name, value: dic[e._id] ? dic[e._id] : 0 })
			else
			dummy.Pending +=1
		});
		this.prepareCahrt1([{name:'Pending', value:dummy.Pending}, {name:'Completed', value:dummy.Completed}])
		// this.piePlant.legend.data = this.allConditios.map(m => m.name)
		this.piePlant.series[0].data = data
		this.piePlant1.series[0].data = [{name:'Pending', value:dummy.Pending}, {name:'Completed', value:dummy.Completed}] 
		this.piePlant = JSON.parse(JSON.stringify(this.piePlant))
		this.changeDetectorRef.detectChanges()
		
	}
	prepareCahrt2(data: any) {
		this.piePlant = {
			tooltip: {
				trigger: 'item',
				formatter: "{b}: {d}%",
			},
			title: {
				text: `Patient \n\n ${this.allPatients.length}`,
				left: 'center',
				top: 'center',
				textStyle: {
					color: '#ccc'
				}
			},
			legend: {
				x: 'right',
				y: 'center',
				zlevel: 0,
				z: 1,
				data: this.allConditios.map(m => m.name),
				orient: 'vertical',
				align: 'left',
				itemGap: 20
			},
			calculable: false,
			color: ['#fd3995', '#364afb', '#34bfa3', '#6c757d'],
			series: [
				{
					center: ["50%", "50%"],
					type: 'pie',
					clockWise: false,
					radius: ['60%', '80%'],
					itemStyle: {
						normal: {
							label: {
								show: false,
								position: 'center',
								formatter: "hello "
							},
							labelLine: {
								show: false,
								text: "hello "
							},
						},
						emphasis: {
							label: {
								show: false,
								position: 'center',
								formatter: 'hy',
								textStyle: {
									fontSize: '16',
									fontFamily: 'Montserrat',
									fontWeight: '600'
								},
							}
						}
					},
					data: data
				}]
		}
		this.changeDetectorRef.detectChanges()
	}

	prepareCahrt1(data: any) {
		this.piePlant1 = {
			tooltip: {
				trigger: 'item',
				formatter: "{b}: {d}%",
			},
			title: {
				text: `Patient \n\n ${data[0].value+ data[1].value}`,
				left: 'center',
				top: 'center',
				textStyle: {
					color: '#ccc'
				}
			},
			legend: {
				x: 'right',
				y: 'center',
				zlevel: 0,
				z: 1,
				data: ['Pending', 'Completed'],
				orient: 'vertical',
				align: 'left',
				itemGap: 20
			},
			calculable: false,
			color: ['#fd3995', '#364afb', '#34bfa3', '#6c757d'],
			series: [
				{
					center: ["50%", "50%"],
					type: 'pie',
					clockWise: false,
					radius: ['60%', '80%'],
					itemStyle: {
						normal: {
							label: {
								show: false,
								position: 'center',
								formatter: "hello "
							},
							labelLine: {
								show: false,
								text: "hello "
							},
						},
						emphasis: {
							label: {
								show: false,
								position: 'center',
								formatter: 'hy',
								textStyle: {
									fontSize: '16',
									fontFamily: 'Montserrat',
									fontWeight: '600'
								},
							}
						}
					},
					data: data
				}]
		}
		this.changeDetectorRef.detectChanges()
	}

	offboardDialog(e: any, takeSurvey=false): void {
		if(takeSurvey){
			const dialogRef = this.dialog.open(AlertMsgComponent, {
				width: '650px',
				data: { user: e , takeSurvey: takeSurvey}
			});
			dialogRef.afterClosed().subscribe(result => {
				if(result == 'takeSurvey'){
					this.takeSurvey()
				}
			});
		}
		else{
			const dialogRef = this.dialog.open(AlertMsgComponent, {
				width: '650px',
				data: { user: e }
			});
			dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				console.log(result);
				if (result) {
					this.subcriptions()
					this.dashboardService.msg = 'Patient Login Status Changed'
					this.openSnackBar()
				}
			});
		}
	}

	initResetForm() {
		this.onboardForm = this.fb.group({
			email: ['', Validators.compose([
				// Validators.required,
				Validators.email,
				Validators.minLength(3),
				// https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
				Validators.maxLength(320)
			]),
			],
			condition: ['', Validators.compose([
				Validators.required,
			])
			],
			mobileno: ['', Validators.compose([
				Validators.required,
			])
			], gender: ['', Validators.compose([
				Validators.required,
			])
			], age: ['', Validators.compose([
				Validators.required,
			])
			], lastName: ['', Validators.compose([
				Validators.required,
			])
			],
			firstName: ['', Validators.compose([
				Validators.required,
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
	onsubmit() {
		const controls = this.onboardForm.controls;
		/** check form */
		if (this.onboardForm.invalid) {
			Object.keys(controls).forEach(controlName => {
				controls[controlName].markAsTouched()
				console.log(controls[controlName])
			}

			);
			return;
		}
		const authData = {
			email: controls['email'].value,
			// conditionId: controls['condition'].value,
			phoneNumber: controls['mobileno'].value,
			gender: controls['gender'].value,
			age: controls['age'].value,
			name: controls['firstName'].value + controls['lastName'].value,
			// lastName: controls['lastName'].value,
		};
		this.dashboardService.onBoardPatient(authData, controls['condition'].value, this.loggedInUser.userData._id).subscribe(res => {
			this.sendEmail(res)
			controls['email'].reset(),
				controls['condition'].reset(),
				controls['mobileno'].reset(),
				controls['gender'].reset(),
				controls['age'].reset(),
				controls['firstName'].reset()
				controls['lastName'].reset(),
				this.dashboardService.msg = 'Patient onboard is successful'
			this.openSnackBar()
			this.subcriptions()
		})
	}

	openSnackBar() {
		this._snackBar.openFromComponent(ToastComponent, {
			duration: 4000,
		});
	}
	emailforSurvey(e: any) {
		let data = {
			'date': new Date().toISOString()
		}
		this.dashboardService.editUser(data, e.DoctorId._id, e._id).subscribe((res: any) => {

			this.dashboardService.emailforSurvey(e).subscribe((res: any) => {

			})
		})

		this.dashboardService.msg = 'email has been sent.'
		this.openSnackBar()
		this.subcriptions()
		this.changeDetectorRef.detectChanges()
	}
	public sendEmail(e: any) {
		this.emailform = this.fb.group({
			email: [e.email],
			password: [e.password]
		})
		this.dashboardService.emailSend(e).subscribe((res: any) => {
			console.log(res);

		})
	}
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.onboardForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
