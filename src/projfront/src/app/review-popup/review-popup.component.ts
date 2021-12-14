import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent implements OnInit {
  ReviewForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReviewPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.ReviewForm = this.fb.group({
      review: ['', Validators.required],
      pain:[this.data.painLevel?this.data.painLevel: ''],
      ableToWork: [this.data.dailyUpdate?this.data.dailyUpdate: ''],
      describe: [this.data.dailyUpdate1?this.data.dailyUpdate1: '']
    })
    console.log("ygusdkfcfnsjbdcjhs", this.data);

  }

  sendReview() {
    const controls = this.ReviewForm.controls;
    /** check form */
    if (this.ReviewForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      // this.isPasswordMatch = true
      return;
    }
    let data = {
      review: controls['review'].value,
      reviewStatus: true
    }
    this.dashboardService.sendReview(data, this.data._id).subscribe((res: any) => {
      this.dialogRef.close("yes")
    })
  }
}
