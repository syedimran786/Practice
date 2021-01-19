import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mm',
  templateUrl: './mm.component.html',
  styleUrls: ['./mm.component.css']
})
export class MmComponent implements OnInit {

  mmForm: FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void
  {
    this.mmForm=this.fb.group(
      {
        d1: [""],
        d2: [""],
        d3: [""],
        d4: [""],
        d5: [""],
        d6:[""]
      }
    )
  }

  onSubmit(lvalue)
  {
    console.log(lvalue);
    var conf = confirm("Do you want to add more filters");
    if (conf === true) {
      this.router.navigateByUrl("/mm");
    }
    else
    {
      this.router.navigateByUrl("/home")
    }
  }


}
