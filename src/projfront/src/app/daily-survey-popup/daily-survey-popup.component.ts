import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';
import { DashboardService } from '../dashboard/dashboard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-daily-survey-popup',
  templateUrl: './daily-survey-popup.component.html',
  styleUrls: ['./daily-survey-popup.component.scss']
})
export class DailyServeyPopupComponent implements OnInit {
  dailyReport: FormGroup;
  selectedIndex = 0
  user:any = JSON.parse(localStorage.getItem('user') || '{}');
  trackingTabs:any = {
    quastion1: '',
    quastion2: '',
    quastion3: '',
  }
  constructor(
    public dialogRef: MatDialogRef<DailyServeyPopupComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private dashboardService: DashboardService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.dailyReport = this.fb.group({
      quastion1: ['', Validators.required],
      quastion2: ['', Validators.required],
      quastion3: ['', Validators.required],
    })
  }
  onNoClick(){

  }
  tabChanged(e: any) {
    this.selectedIndex = e.index
  }
  onSubmit(a:any){
    let val = 'quastion' + this.selectedIndex + 1
    if (this.dailyReport.controls['quastion' + (this.selectedIndex + 1)].value) {
      this.trackingTabs['quastion' + (this.selectedIndex + 1)] = true
      this.selectedIndex += 1
    }
    else {
      this.dashboardService.msg = 'Please Enter Survey'
      this._snackBar.openFromComponent(ToastComponent, {
        duration: 4000,
      });
    }
    if(this.dailyReport.controls['quastion1'].value &&
      this.dailyReport.controls['quastion2'].value &&
      this.dailyReport.controls['quastion3'].value){
        let data = {
          dailyUpdate:this.dailyReport.controls['quastion1'].value,
          painLevel:this.dailyReport.controls['quastion2'].value,
          dailyUpdate1:this.dailyReport.controls['quastion3'].value
        }
        this.dashboardService.dailyReport(data,this.user.userData._id,this.user.userData.conditionId._id,this.user.user._id).subscribe(res =>{
          this.user.userData.date = new Date().toISOString()
          localStorage.setItem('user',JSON.stringify(this.user))
          this.dialogRef.close('yes')
        })
      }
    this.changeDetectorRef.detectChanges()
  }
}
