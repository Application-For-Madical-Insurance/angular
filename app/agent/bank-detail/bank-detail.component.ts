import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { CustomerRegistration } from 'src/app/customer-registration';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/payment';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  bankdetailform:FormGroup
  dataSaved = false;
  massage: string;
  FromStudent: any;
  StudentId: string = "0";
  allStudent: Observable<Payment[]>; 

  constructor(private formbulider: FormBuilder, private register: RegisterService, private router: Router) { }

  ngOnInit() {
    this.bankdetailform = this.formbulider.group({
      BankName: ['', [Validators.required]],
      ChequeNumber: ['', [Validators.required]],
      
    });
  }
  onBankDetails(register:Payment){
 this.register.insertBnakDetails(register).subscribe(
     
  () => {
    this.dataSaved = true;
    this.massage = 'Record saved Successfully';
    this.bankdetailform.reset();
    this.router.navigate(['/bank-detail']);

  });
  }

  Back(){
    this.router.navigate(['/agent-dashboard']);
  }
}
