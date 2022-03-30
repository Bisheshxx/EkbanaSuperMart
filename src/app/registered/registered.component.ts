import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  public registrationForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient) { }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      first_name:[''],
      last_name:[''],
      email:[''],
      password:[''],
      mobile_number:['']
    })
  }
  register(){
    this.http.post<any>("https://uat.ordering-dalle.ekbana.net/api/v4/auth/signup",this.registrationForm.value)
    .subscribe({
      next:data=>{
        
        alert('done')
      },
      error:err=>{
        alert('err')
      }
    })
  }

}
