import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Management';
  userList : any;
  readonly APP_URL = 'http://localhost:8081/user-mgmt';
  constructor(private _http: HttpClient) { }
 
  // Method to fetch all users through REST service.
  getAllUsers() {
    this._http.get(this.APP_URL + '/getUsers').subscribe(
      data => {
        this.userList = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
}
