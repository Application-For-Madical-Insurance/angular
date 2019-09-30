import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';
import { FormBuilder } from '@angular/forms';
import { UserRegistration } from 'src/app/user-registration';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {
  dataSaved = false;
  massage: string;
  FromStudent: any;
  CustomerId: number = 1;
  allCustomer: Observable<UserRegistration[]>;  

  constructor(private formbulider: FormBuilder,private register:RegisterService, private router: Router) { }

  ngOnInit() {
    this.GetInquiry();
  
  }
  GetInquiry() {
    this.allCustomer = this.register.getInquiry();
  }

  
  Back(){
    this.router.navigate(['agent-dashboard']);
  }

  DeleteCustomer(CustomerId: number) {  
    if (confirm("Are You Sure To Delete this Informations")) {  
     this.register.DeleteInquiry(CustomerId).subscribe(  
      () => {  
       this.dataSaved = true;  
       this.massage = "Deleted Successfully";  
       this.GetInquiry();  
      }  
     );  
    }  
   }  
}
