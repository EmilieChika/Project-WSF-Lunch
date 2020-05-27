import { Injectable } from '@angular/core';
import { ConnectionForm } from '../inputs/connection-input.types';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor() {}

public login({email, password}: ConnectionForm){
const user = environment.fakeData.users.find(user => {
    return user.password === password && user.email === email;
});

    }

}