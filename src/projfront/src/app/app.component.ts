import { Component } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medical-expert';
  isLoading = false
  constructor(
    private spinnerService: NgxUiLoaderService
) { }
ngOnInit(): void {
  this.show()
}
show(){
  this.spinnerService.start();
  setTimeout(() => {
    this.spinnerService.stop();
    this.isLoading = true
  }, 1000);
}
  // piePlant;
  // constructor(){}
  // this.piePlant = {
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{b}: {c}%',
  //   },
  //   legend: {
  //     orient: 'vertical',
  //     left: 'right',
  //     x: 'left',
  //     y: 'center',
  //     zlevel: 0,
  //     z: 1,
  //     align: 'left',
  //   },
  //   series: [
  //     {
  //       name: 'Maintenance Activities',
  //       type: 'pie',
  //       right:"20%",
  //       radius: '80%',
  //       color: ['#374AFB', '#6766FF', '#8F84FF', '#B5A2FF', '#DAC2FF', '#eaddff' ],
  //       data: [
  //         {value: 28, name: 'Instrument (CBM/PdM)'},
  //         {value: 25, name: 'Time Based Maintenance'},
  //         {value: 17, name: 'Mechanical (CBM/PdM)'},
  //         {value: 15, name: 'Performance (CBM/PdM)'},
  //         {value: 9, name: 'Reactive Maintenance'},
  //         {value: 5, name: 'Electrical (CBM/PdM)'},

  //       ],
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)'
  //         }
  //       }
  //     }
  //   ]
  // }
}
