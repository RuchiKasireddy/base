import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardService } from '../dashboard/dashboard.service';
@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.scss']
})
export class AlertMsgComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<AlertMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
submit(){
  if(this.data.takeSurvey){
    this.dialogRef.close('takeSurvey')
  }
  else{
    let data = {
      status: !this.data.user.status
    }
    this.dashboardService.editUser(data, this.data.user.DoctorId._id, this.data.user._id).subscribe( (res: any) => {
        this.dialogRef.close('yes')
    })
  }
}
Cancel(){
  this.dialogRef.close()
}

}
