import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // api = 'https://doctor-no1.herokuapp.com/'
  api = 'http://localhost:5000/'
  alertListChanged = new EventEmitter<any>();
  msg = ''


  constructor(private http: HttpClient) { }
  getAllConditios(){
    let url= this.api + 'api/getAllconditions'
    return this.http.get(url)
  }

  getAllPatients(){
    let url= this.api + 'api/getallPatients'
    return this.http.get(url)
  }

  onBoardPatient(d: any, ConditionId:any, userId:any) {
    let url = this.api + 'api/signUpOfPatient/'+userId+'/'+ConditionId
    // /userId/ConditionId
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, d, { headers: httpHeaders })
  }
  emailSend(d: any) {
    let url = 'https://api.emailjs.com/api/v1.0/email/send'
    // /userId/ConditionId
    // 'service_7f4e33j', 'template_yw1523m', this.emailform , 'user_ZVE6kaaWoren7oRSg7S3c'
    var data = {
      service_id: 'service_rnhdcpc',
      template_id: 'template_i62a3fi',
      user_id: 'user_FT4qIkHG8thNeBsFj5Wbz',
      template_params: {
          'email': d.email,
          'password': d.password
      }
  };
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers: httpHeaders })
  }

  getAlldailyReport() {
    let url = this.api + 'api/getAlldailyReport'
    return this.http.get(url)
  }
  getallPatients() {
    let url = this.api + 'api/getallPatients'
    return this.http.get(url)
  }
  sendReview(data: any, id:any) {
    let url = this.api + 'api/updatereport/' + id
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(url, data, { headers: httpHeaders })
    // return this.http.put<AlertModel>(API_URL + url, alert, { headers: this.userService.getHttpAuthHeader() })

  }
  editUser(data: any, doctorId:any, PatientId:any) {
    console.log("hbsdkjcn", data);
    
    let url = this.api + 'api/updateStatus/'+doctorId +'/'+PatientId
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(url, data, { headers: httpHeaders })
  }

  signIn(data: any){
    let url = this.api + 'api/signIn'
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers: httpHeaders })
    
  }
  emailforSurvey(d: any) {
    console.log("chekcing email", d);
    
    
    let url = 'https://api.emailjs.com/api/v1.0/email/send'
    // /userId/ConditionId
    // 'service_7f4e33j', 'template_yw1523m', this.emailform , 'user_ZVE6kaaWoren7oRSg7S3c'
    var data = {
      service_id: 'service_7f4e33j',
      template_id: 'template_vviwtbu',
      user_id: 'user_ZVE6kaaWoren7oRSg7S3c',
      template_params: {
          'email': d.userId.email,
      }
  };
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers: httpHeaders })
  }
  // template_vviwtbu
  forgotPassword(data: any){
    let url = this.api + 'api/updatepassword'
    
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers: httpHeaders })
    
  }
  
  dailyReport(data: any, p_id:any, c_id:any, u_id:any){
    let url = this.api + `api/createdailyReport/${p_id}/${c_id}/${u_id}`
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(url, data, { headers: httpHeaders })
  }
}
