import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  loggedInUser:any = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() { }

  ngOnInit(): void {
  }

}
