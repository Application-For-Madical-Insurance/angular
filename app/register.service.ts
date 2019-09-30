import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserRegistration } from "../app/user-registration";
import { from, Observable } from 'rxjs';
import { CustomerRegistration } from './customer-registration';
import { Policy } from './policy';
import { Payment } from './payment';
import { CustomerID } from './customer-id';
import { Registerdcustomer } from './registerdcustomer';
import { Contactus } from './contactus';
import { UserDetails } from './user-details';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  getdetails(id: any) {
    throw new Error("Method not implemented.");
  }


  Url: string;
  Url1: string;
  // Url2:string;
  token: string;
  header: any;
  // Url3: string;
  // Url4: string;
  // Url5:string;
  // Urlp:string;

  constructor(private http: HttpClient, private register: RegisterService) {
    this.Url = 'http://localhost:56123/Api/';
    this.Url1 = 'http://localhost:56123/Api/IMHI/GETAdmin';
    // this.Url1 = 'http://localhost:57626/api'; 
    // this.Url = 'http://localhost:57626/api';
    // this.Url3 = 'http://localhost:56123/Api/';
    // this.Url4 = 'http://localhost:56123/Api/'
    // this.Url5 = 'http://localhost:57626/api/'
    // this.Urlp = 'http://localhost:56123/Api/'

    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  RegisterCustomer(register: UserRegistration) {
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserRegistration[]>(this.Url + 'IMHI/InsertEnquiry/', register, httpOptions)
  }

  getInquiry(): Observable<UserRegistration[]> {
    return this.http.get<UserRegistration[]>(this.Url + 'IMHI/GetEnquiry/');
  }
  DeleteInquiry(CustomerId: number): Observable<number> {
    return this.http.delete<number>(this.Url + '/CustomerTables/' + CustomerId);
  }

  finalRegistration(register: CustomerRegistration) {
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CustomerRegistration[]>(this.Url + 'IMHI/NewRegister', register, httpOptions)

  }
  getCustomer(): Observable<CustomerRegistration[]> {
    return this.http.get<CustomerRegistration[]>(this.Url + 'IMHI/GetEnquiryCustomerList');
  }

  DeleteCustomer(CId: number): Observable<number> {
    return this.http.delete<number>(this.Url + 'Registrations/' + CId);
  }



  insertPolicy(register: Policy): Observable<Policy[]> {
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Policy[]>(this.Url + '/IMHI/PolicyDetail/', register, httpOptions)
  }

  insertBnakDetails(register:Payment){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Payment[]>(this.Url + 'IMHI/Payment/', register, httpOptions)
  }

  // getCustomerIdMax(){
  //   return this.http.get<CustomerID[]>(this.Url + 'IMHI/GetCustomerIDList');
  // }


  getallpolicycustomer(): Observable<Registerdcustomer[]>{
    //debugger;
    return this.http.get<Registerdcustomer[]>(this.Url + 'IMHI/Newenquerylist'); 
  }

  postContactUsForm(register:Contactus){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Contactus[]>(this.Url + 'IMHI/Contactus/', register, httpOptions)
  }

  getQueries(): Observable<Contactus[]>{
    return this.http.get<Contactus[]>(this.Url + 'IMHI/GETcontactus'); 

  }

  userLogin(cred){
   return this.http.get(this.Url+'IMHI/GetUserLoginStatus',cred); 
  }

  sendApprovel(Details:any): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.Url + 'IMHI/PolicyApproval', +Details,httpOptions)

  }
  getDetails(id:any):Observable<any>{
    //console.log(id);
    return this.http.get<any>(this.Url+'IMHI/GETAdmin',id);
  }


    
  }

