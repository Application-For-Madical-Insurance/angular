import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';
import { Registerdcustomer } from 'src/app/registerdcustomer';
import { UserDetails } from 'src/app/user-details';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  dataSaved = false;  
  message: string;  
  FromStudent: any;  
  CId: number = 1;  
  // CustomerID: number = 28;
  PolicyDetailID: number = 1;
  allpolicyCustomer: Observable<Registerdcustomer[]> ; 
  // data: false;
  Status: string = " ";
  RejectionReason: string = " ";
  // Details={
  //   "CustomerID":this.CustomerID,
  //   "PolicyDetailID": this.PolicyDetailID,
  //   "Status": "",
  //   "RejectionReason": ""
  // }
    
  

  constructor(private formbulider: FormBuilder, private register: RegisterService, private router :Router) { }

  ngOnInit() {
    // console.log(this.Details);
    this.getallcustomer();
  }



  getallcustomer(){
    //debugger;
    this.allpolicyCustomer = this.register.getallpolicycustomer();  

  }
  Back(){
    this.router.navigate(['admin-dashboard']);
  }

  // approvedCustomer(Details:any){
  //   // console.log(this.finalRegistrationForm);
  //   if (confirm("Are You Sure To Delete this Informations")) 
  //   this.register.sendApprovel(this.Details).subscribe(
  //     () => {
  //       this.dataSaved = true;
  //       this.message = 'Data saved Successfully';
  //       this.getallcustomer();
  //     });
  // }


  viewCustomerDetails(CustomerID:string){

    localStorage.setItem('customerid',  CustomerID);
     console.log(localStorage.getItem('customerid'));
   
    
    this.router.navigate(['view-form']);
    

  }
}
