import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { CustomerRegistration } from 'src/app/customer-registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  finalRegistrationForm: FormGroup;
  data = false;
  finalRegistration: any;
  message: string;
  RegisterService: any;
  emailpattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";

  
  constructor(private formbulider: FormBuilder, private register: RegisterService, private router: Router) {


    this.finalRegistrationForm = this.formbulider.group({
      Firstname: ['', [Validators.required]],
      Middlename: ['', [Validators.required]],
      Lastname: ['', [Validators.required]], 
      Email: ['', [Validators.required,Validators.pattern(this.emailpattern)]],
      ContactNo: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      PIN: ['', [Validators.required]],
      AadharNo: ['', [Validators.required]],
      
      PolicyMasterID: ['', [Validators.required]],
      SumAssured: ['', [Validators.required]],
      BankName: ['', [Validators.required]],
      ChequeNumber: ['', [Validators.required]],

      });

   }

  ngOnInit() {
    
    
  }
  get f() { return this.finalRegistrationForm.controls; }

  onSubmit(register: CustomerRegistration) {
    console.log(this.finalRegistrationForm.value)
    this.register.finalRegistration(register).subscribe(
      () => {
        this.data = true;
        this.message = 'Data saved Successfully';
        this.finalRegistrationForm.reset();
      });
      alert("Form Sumbited");
  }
  


  Back(){
    this.router.navigate(['/agent-dashboard']);
  }
}
