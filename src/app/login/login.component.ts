import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  user = new User();

  onLoggedin() { console.log(this.user); }
}
