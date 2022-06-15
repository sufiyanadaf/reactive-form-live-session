
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Practice';
  // a: any = [];
  // b:any=[];
  // c:any=[];
  // d:any=[];
  // number:any;
  // result:any;
  // oddnumber:any;
  // odd:any;
  // item:any;
  // orderStatus: Observable<string>; 
  employsList1: any
  employsList2: any;
  employList: any = [];
  myForm: any = FormGroup;

  constructor() {
    // this.orderStatus = new Observable(
    //   (observer)=>{
    //     setTimeout(() => {
    //       observer.next('Order is placed')
    //     }, 8000);
    //     setTimeout(()=>{
    //       observer.next('In progress')
    //     },3000);
    //     setTimeout(()=>{
    //       observer.next('Near to u r location')
    //     },4000);
    //     setTimeout(()=>{
    //       observer.next('out for delivery')
    //     },5000);
    //     setTimeout(()=>{
    //       observer.next('Delivered !!')
    //     },6000);
    //   }
    // )
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.minLength(6)]),
      last_name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      mobile_number: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  get first_name() {
    return this.myForm.get('first_name')
  }

  get last_name() {
    return this.myForm.get('last_name')
  }

  get mobile_number() {
    return this.myForm.get('mobile_number')
  }

  get dob() {
    return this.myForm.get('dob')
  }
  get email() {
    return this.myForm.get('email')
  }
  get password() {
    return this.myForm.get('password')
  }
  get confirm_password() {
    return this.myForm.get('confirm_password')
  }
  submit() {
    if (this.myForm.status == "VALID") {
      if (this.myForm.value.password == this.myForm.value.confirm_password) {
        console.log(this.myForm)
        console.log(this.myForm.value)
      } else {
        window.alert("Incorrect Password")
      }
    } else {
      window.alert("INVALID FORM")
    }
  }

}










