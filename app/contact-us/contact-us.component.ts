import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { Contactus } from '../contactus';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsform:FormGroup;
  data = false;
  finalRegistration: any;
  message: string;
  RegisterService: any;

  constructor(private formBuilder: FormBuilder,  private register: RegisterService, private router: Router) { }

  ngOnInit() {
    
    this.contactUsform = this.formBuilder.group({
      FullName: ['', [Validators.required]],
      Email:  ['', [Validators.required]],
      PhoneNumber:  ['', [Validators.required]],
      Message:  ['', [Validators.required]],
    });
  }
  onContactUsSubmit(register: Contactus){
    
    this.register.postContactUsForm(register).subscribe(
      () => {
        this.data = true;
        this.message = 'Data saved Successfully';
        this.contactUsform.reset();
        this.router.navigate(['/home']);
      });
    
      
  }
  Back(){
    this.router.navigate(['/home']);
  }

}
