import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {SignIn} from './buyer-signin.model';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-buyer-signin',
  templateUrl: './buyer-signin.component.html',
  styleUrls: ['./buyer-signin.component.css']
})
export class BuyerSigninComponent implements OnInit {
  buyerSignInForm: FormGroup;
  userModel : SignIn;
  constructor(private fb: FormBuilder, private accountService : AccountService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.buyerSignInForm = this.fb.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  signInSubmit(buyerSignInForm:FormGroup)  
  {  
    this.userModel= new SignIn(
      buyerSignInForm.controls.userName.value,
      buyerSignInForm.controls.password.value,
    );
    console.log(this.buyerSignInForm); 

    this.accountService.signIn(this.userModel).subscribe(data => {
              console.log(data);
    }, error => {
      console.log(error);
    });

  }

}
