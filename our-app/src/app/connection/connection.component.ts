import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../app/services/login.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

public connectionForm = new FormGroup({
   email: new FormControl('',[
     Validators.email,
     Validators.required
   ]),
   password: new FormControl('',[
     Validators.minLength(8),
     Validators.required
   ])
});


  

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.loginService.login(this.connectionForm.value)
    // TODO: Use EventEmitter with form value
    console.log(this.connectionForm.value);
  }

  get email() { return this.connectionForm.get('email'); }

  get password() { return this.connectionForm.get('password'); }


}

