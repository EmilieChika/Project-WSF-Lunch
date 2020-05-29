import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filterForm = new FormGroup({
    
   
 });

  foods = [
    
    {type: 'Hamburger'},
    {type: 'pizza'},
    {type:'Chinois'}, 
    {type:'Grec'}, 
    {type:'Crêpes salées'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
filterControl:['Hamburger']
    });
  }
}
