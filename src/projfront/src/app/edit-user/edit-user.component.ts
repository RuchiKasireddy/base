import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  ReviewForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.ReviewForm = this.fb.group({
      name: [this.data.user.name, Validators.required],
      condition: [this.data.user.conditionId._id, Validators.required],
      phoneNumber: [this.data.user.phoneNumber, Validators.required],
      age: [this.data.user.age, Validators.required]
    })
  }
  onNoClick(): void {
    this.dialogRef.close()
  }
  onSubmit(){
    const controls = this.ReviewForm.controls;
    /** check form */
    if (this.ReviewForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    let data = {
      name: controls['name'].value,
      conditionId: controls['condition'].value,
      phoneNumber: controls['phoneNumber'].value,
      age: controls['age'].value
    }
    this.dashboardService.editUser(data, this.data.user.DoctorId._id, this.data.user._id).subscribe( (res: any) => {

      this.dialogRef.close('yes')
    })
  }

}
