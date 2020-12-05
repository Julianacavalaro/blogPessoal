import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('htttp://localhost:8080/usuarios/logar', userLogin )
  }

  cadastrar(user: User) : Observable<User> {
    return this.http.post<User>('htttp://localhost:8080/usuarios/cadastrar', user )
  }
}
