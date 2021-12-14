import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MenubarComponent } from './menubar/menubar.component';
import { SidemenubarComponent } from './sidemenubar/sidemenubar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as echarts from 'echarts'
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
// import {CdkTableModule} from '@angular/cdk/table'
import {MatTableModule} from '@angular/material/table';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DailyServeyReminderPopupComponent } from './daily-survey-reminder-popup/daily-servey-reminder-popup.component';
import { DailyServeyPopupComponent } from './daily-survey-popup/daily-survey-popup.component'
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import {MatSelectModule} from '@angular/material/select';
import { ToastComponent } from './toast/toast.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidemenubarComponent,
    LoginComponent,
    routingComponents,
    ForgetPasswordComponent,
    DashboardComponent,
    EditUserComponent,
    AlertMsgComponent,
    // DailyServeyReminderPopupComponent,
    DailyServeyPopupComponent,
    ReviewPopupComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    NgxUiLoaderModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  entryComponents: [
    EditUserComponent,
    AlertMsgComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
