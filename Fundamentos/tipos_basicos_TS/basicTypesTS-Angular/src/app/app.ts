import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './models/usuario.models';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario: Usuario = {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    ativo: true
  };
}
  