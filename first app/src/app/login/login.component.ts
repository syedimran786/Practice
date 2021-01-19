import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lForm: FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void
  {
    this.lForm=this.fb.group(
      {
        username: ["",Validators.required],
        password:["",Validators.required]
      }
    )
  }

  onSubmit(lvalue)
  {
    console.log(lvalue);

    // this.lForm.reset();
    this.router.navigateByUrl("/home")
  }

}
