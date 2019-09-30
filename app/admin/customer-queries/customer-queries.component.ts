import { Component, OnInit } from '@angular/core';
import { Contactus } from 'src/app/contactus';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';


@Component({
  selector: 'app-customer-queries',
  templateUrl: './customer-queries.component.html',
  styleUrls: ['./customer-queries.component.css']
})
export class CustomerQueriesComponent implements OnInit {

  dataSaved = false;  
  massage: string;  
  FromStudent: any;  
  CId: number = 1;  
  allCustomerQueries: Observable<Contactus[]> ; 

  constructor(private formbulider: FormBuilder, private RegisterService: RegisterService, private router :Router) { }

  ngOnInit() {
  }

  getAllQueries(){

    this.allCustomerQueries = this.RegisterService.getQueries();  

  }
  Back(){
    this.router.navigate(['/admin-dashboard']);
  }
}
