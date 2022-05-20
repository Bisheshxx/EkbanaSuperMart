import { Component } from '@angular/core';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'supermartweb';
  constructor(private tokenService: TokenService){}
  ngOnInit() {
    this.isLoggedIn()
  }
  isLoggedIn() {
    return this.tokenService.isLoggedIn();
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
