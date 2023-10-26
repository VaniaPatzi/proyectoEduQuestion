import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  authGoogleService: any;

  constructor(private router: Router) { }

  login() {
    this.authGoogleService.login();
  }
}
