import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { ToastController } from '@ionic/angular';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: LoginUsuario;
  username: string = '';
  password: string = '';

  errMjs = '';
  isLogged: boolean = false;

  constructor(private authService: AuthService,
    private tokenService: TokenService,
    private toastController: ToastController,
    private router: Router) {
    this.loginUsuario = new LoginUsuario();
  }

  ngOnInit() {
    this.estaLogeado();
  }

  onLogin() {
    this.loginUsuario.username = this.username;
    this.loginUsuario.password = this.password;
    this.authService.login(this.loginUsuario).subscribe(data => {
      let payload = JSON.parse(atob(data.access_token.split(".")[1]));
      this.tokenService.setToken(data.access_token);
      this.tokenService.setUsername(payload.nombre + ' ' + payload.apellido);
      this.tokenService.setAuthorities(payload.authorities);
      this.isLogged = true;
      this.router.navigate(['/']);
    }, err => {
      this.errMjs = "Credenciales incorrectas";
      this.presentToast();
    })
  }

  vaciar() {
    this.username = '';
    this.password = '';
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errMjs,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.vaciar();
  }

  estaLogeado() {
    this.isLogged = this.tokenService.getToken() != null;
  }

}
