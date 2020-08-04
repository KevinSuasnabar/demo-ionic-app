import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLogged: boolean = false;
  username: string = "kevin";
  isAdmin;
  constructor(private tokenService: TokenService) {

  }

  //transicion entre pagina
  ionViewWillEnter() {
    this.estaLogeado();

  }


  estaLogeado() {
    this.isLogged = this.tokenService.getToken() != null;
    this.username = this.tokenService.getUsername();
    this.isAdmin = this.tokenService.getAuthorities().length > 1; // si tiene mas de un rol

  }

}
