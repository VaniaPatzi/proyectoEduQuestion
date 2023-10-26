import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  showData() {
    const data = JSON.stringify(this.authService.getProfile())

    console.log(data);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
