import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<any> {

    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + credenciales
      });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', loginUsuario.username);
    params.set('password', loginUsuario.password);

    return this.http.post(urlEndpoint, params.toString(), { headers: httpHeaders })
  }
}
