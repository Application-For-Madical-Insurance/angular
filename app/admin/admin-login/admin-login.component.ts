import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  constructor(private formbulider: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.adminLoginForm = this.formbulider.group({    
          
      email: ['', [Validators.required]],
      password: ['',  [Validators.required]],    
          
    })
  }
  onAdminLogin(){
    
    if(this.adminLoginForm.value.email=="admin@gmail.com" && this.adminLoginForm.value.password=="admin"){
    this.router.navigate(['admin-dashboard']);
  }
  }
}
