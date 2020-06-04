import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
/*import * as $ from 'jquery'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filterForm = new FormGroup({


 });

  foods = [

    {type: 'fast-food'},
    {type: 'asian-food'},
    {type:'african-food'},
    {type:'veggie'},
    {type:'autres'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
filterControl: ['']
    });


   
  } 




  }


