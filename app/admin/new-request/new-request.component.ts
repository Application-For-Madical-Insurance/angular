import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegistration } from 'src/app/customer-registration';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  
  dataSaved = false;  
  massage: string;  
  FromStudent: any;  
  CId: number = 1;  
  allCustomer: Observable<CustomerRegistration[]> ; 

  constructor(private formbulider: FormBuilder, private RegisterService: RegisterService, private router :Router) { }

 
  ngOnInit() {
  }
   getallcustomer() {   
    this.allCustomer = this.RegisterService.getCustomer();  
   } 

  DeleteCustomer(CId: number) {
    if (confirm("Are You Sure To Delete this Informations")) {
      this.RegisterService.DeleteCustomer(CId).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = "Deleted Successfully";
          this.getallcustomer();
        }
      );
    }
  }
  Back(){
    this.router.navigate(['admin-dashboard']);
  }
}
