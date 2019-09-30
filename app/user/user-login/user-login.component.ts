import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {Observable} from 'rxjs';       
import { RegisterService } from 'src/app/register.service';
import { UserDetails } from 'src/app/user-details';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm: FormGroup;
  model : any={};      
  errorMessage:string;   
  allLogCustomer: Observable<UserDetails[]>

  constructor(private formbulider: FormBuilder, private router: Router,private register:RegisterService) { }
 
  ngOnInit() {
    
     this.userLoginForm = this.formbulider.group({    
      email: ['', [Validators.required]],
      password: ['',  [Validators.required]],          
    })
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }

  onLogin(){    
    debugger;
    const cred = this.userLoginForm.value;
    this.register.userLogin(cred).subscribe(
    res=> {
      // this. = res;  
      });
    
    
     
  }  
}
