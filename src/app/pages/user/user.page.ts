import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  productos:string[]=['producto1','producto2','producto3','producto4']


  constructor() { }

  ngOnInit() {
  }

}
