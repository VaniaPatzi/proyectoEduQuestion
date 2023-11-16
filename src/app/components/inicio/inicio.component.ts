import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
export interface Todo {
  materia: string;
  nota: number;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  todos: Todo[] = [];
  nuevaMateria: string = '';
  nuevaNota: number = 0;
  agregarMateria() {
    if (this.nuevaMateria.trim() === '') {
      return;
    }

    const nuevaTarea: Todo = {
      materia: this.nuevaMateria,
      nota: this.nuevaNota
    };

    this.todos.push(nuevaTarea);
    this.nuevaMateria = '';
    this.nuevaNota = 0;
  }
 
  constructor(public auth: AuthService) {}
}
