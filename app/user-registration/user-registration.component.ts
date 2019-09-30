import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { RegisterService } from '../register.service';
import { UserRegistration } from '../user-registration';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userRegistrationForm: FormGroup;
  data = false;
  submitted=false;
  UserForm: any;
  message: string;
  RegisterService: any;
  

  constructor(private formBuilder: FormBuilder, private register: RegisterService, private router: Router) {
    this.userRegistrationForm = this.formBuilder.group({
      Firstname: ['', Validators.required,Validators.minLength(10)],
      Middlename: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', [Validators.required,Validators.email]],
      ContactNo: ['', [Validators.required,Validators.minLength(10)]],
      PolicyMasterID: ['', [Validators.required]]

    });
    
   
   }

  ngOnInit() {
   
   
  }

   get f() { return this.userRegistrationForm.controls; }

 

  onRegister(register: UserRegistration) {
    console.log(this.userRegistrationForm.value)
    debugger
    this.register.RegisterCustomer(register).subscribe(
      () => {
        this.data = true;
        this.message = 'Data saved Successfully';
        this.userRegistrationForm.reset();
      });
  }

  Back(){
    this.router.navigate(['/home']);
  }

 
}
