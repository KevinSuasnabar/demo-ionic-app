import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;


  constructor(private tokenService: TokenService,
    private router: Router) { }

  ngOnInit() {
    this.estaLogeado();
  }

  logOut() {
    this.tokenService.logOut();
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
    console.log('a')
  }
  estaLogeado() {
    this.isLogged = this.tokenService.getToken() != null;
    this.isAdmin = this.tokenService.getAuthorities().length > 1; // si tiene mas de un rol
  }

}
