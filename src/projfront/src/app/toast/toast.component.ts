import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  styles: [
    `
    .example-pizza-party {
      color: white;
    }
  `,
  ],
})
export class ToastComponent implements OnInit {

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

}
