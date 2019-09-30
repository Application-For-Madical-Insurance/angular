import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {
  agentLoginForm: FormGroup;

  constructor(private formbulider: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.agentLoginForm = this.formbulider.group({    
          
      email: ['', [Validators.required]],
      password: ['',  [Validators.required]],    
          
    })
  }
onLogin(){
  if(this.agentLoginForm.value.email=='agent@gmail.com' && this.agentLoginForm.value.password == 'agent'){
  this.router.navigate(['agent-dashboard']);
  }
  else{
    this.router.navigate(['agent-login']);
  }
}
}
