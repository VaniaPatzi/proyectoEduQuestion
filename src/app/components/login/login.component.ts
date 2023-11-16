import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void{
    this.auth.isAuthenticated$.subscribe(isAuthenticaed =>{
      if(isAuthenticaed){
        this.router.navigate(['/inicio'])
      }
    })
  }

  login() {
    this.auth.loginWithRedirect()
  }
}

