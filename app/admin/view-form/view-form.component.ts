import { Component, OnInit } from '@angular/core';
import { CustomerID } from 'src/app/customer-id';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
id :any;
customerInfo:FormGroup

CustomerInfo:{
Firstname:string;
Middlename:string;
Lastname:string;
ContactNo:number; 
Email:string;
DOB:string;
Address:string;
Street:string;
city:string;
State:string;
PIN:string;
// PolicyDetailID:string;
SumAssured:string;
StartDate:string;
EndDate:string;
};

  constructor(private formbulider: FormBuilder, private register: RegisterService, private router: Router) {

   
   }

  ngOnInit() {
  debugger
  
    console.log(this.id)

    this.register.getDetails(+localStorage.getItem('customerid')).subscribe((res: any) => {
    this.CustomerInfo= res;
    console.log( this.CustomerInfo);
    
  })


    this.customerInfo  = this.formbulider.group({
      Firstname: ['', [Validators.required]],
      Middlename: ['', [Validators.required]],
      Lastname: ['', [Validators.required]], 
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      PIN: ['', [Validators.required]],
      Aadhaar: ['', [Validators.required]],
      PolicyMasterID: ['', [Validators.required]],
      SumAssured: ['', [Validators.required]],
      BankName: ['', [Validators.required]],
      ChequeNumber: ['', [Validators.required]],


      });

      ///this.viewdetails();
    
  }
viewdetails()

{

  
  //const custid=localStorage.getItem('customerid');
  // debugger
  // this.id=localStorage.getItem('customerid');
  // console.log(custid);
  // console.log(custid);
  // this.register.getDetails(this.id).subscribe((res: any) => {
  //   this. CustomerInfo= res;
  //   console.log(this.CustomerInfo);
    
  // });
    
  
}
}
