import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../shared/user-api.service';
import { TokenService } from '../shared/token.service';
import { AuthStateService } from '../shared/auth-state.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientID= environment.client_id
  clientsecret=environment.client_secret
  grantType=environment.grant_type
  errors:any = null;
  @Input() userLogin={username:'', password:'',client_id:this.clientID,client_secret:this.clientsecret, grant_type:this.grantType} 
  constructor( public userApi:UserApiService, public router: Router, private token: TokenService,private authState: AuthStateService) { }
  ngOnInit(): void {}
  signIn(data:any){
    this.userApi.loginUser(this.userLogin)
    .subscribe({
      next:(result)=>{               
        this.responseHandler(result)
        
        this.authState.setAuthState(true);
        this.router.navigate(['profile'])   
      }
    })
  }
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }
}
