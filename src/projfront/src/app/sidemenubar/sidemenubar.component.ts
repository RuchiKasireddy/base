import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AlertMsgComponent } from '../alert-msg/alert-msg.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidemenubar',
  templateUrl: './sidemenubar.component.html',
  styleUrls: ['./sidemenubar.component.scss']
})
export class SidemenubarComponent implements OnInit {
  isSelected = 1;
  @Input() user:any;
  constructor(private dashboardService: DashboardService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {

  }
  cahngeTab(n:number){
    this.isSelected = n
    this.dashboardService.alertListChanged.emit(this.isSelected)
  }
  logout(){
    localStorage.removeItem('user')
		 this.router.navigateByUrl("/")

  }
}
