import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../shared/auth-state.service';
import { TokenService } from '../shared/token.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared/shared-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggled: boolean =true;
  searchValue!:string
  UserState!: boolean
  toggle() {
    this.isToggled = !this.isToggled;
  }
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    private shared:SharedDataService,) { }    
  ngOnInit(): void {
    this.VerifyUserState()  
  }
  VerifyUserState(){
    if(localStorage.getItem('access_token')){      
       this.auth.userAuthState.subscribe(data=>this.UserState=data)
    }
    else{
      this.UserState = false
    }
  }
  getvalue(term:any){
    this.shared.changeSearchTerm(term)
    this.router.navigate(['search'])
  }
  signOut() {
    this.auth.setAuthState(false);
    localStorage.removeItem('access_token')
    this.router.navigate(['login']);
    this.ngOnInit()
  }

}
