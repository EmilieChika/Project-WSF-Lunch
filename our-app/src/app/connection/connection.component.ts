import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  private email = new FormControl();
  private password = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
