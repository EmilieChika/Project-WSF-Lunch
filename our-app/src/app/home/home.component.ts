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
 /* cursor price bar */


 /*$(document).ready(function(){
  var jquery: any;

  interface jquery {
    slider(options?: any): any;
  }
   $("#cursorovert").slider({ orientation:"vertical"});
  $("#cursor").slider({
      min:0,
      max: 25,
      value: 0,
      step: 1,
      slide: function(evt, ui) {
        $('#montant').val("hdehheheh"+ui.value + "€" );
      }

    });

  });*/

  }

}
