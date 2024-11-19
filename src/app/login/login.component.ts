import { Component } from '@angular/core';
import { User } from '../model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User();

  onLogin() {
    console.log(this.user);

  }

  
}
