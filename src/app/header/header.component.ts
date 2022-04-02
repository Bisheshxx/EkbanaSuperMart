import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../shared/auth-state.service';
import { TokenService } from '../shared/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSignedIn!: boolean;
  isToggled: boolean =true;

  toggle() {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled)
  }
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      console.log(this.isSignedIn)
    });
  }
  signOut() {
    this.auth.setAuthState(false);
    localStorage.removeItem('access_token')
    this.router.navigate(['login']);
  }

}
