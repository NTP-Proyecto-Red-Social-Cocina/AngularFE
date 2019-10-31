import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/user';
import { UsersService } from '../servicios/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Observable<User[]>;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usuarios = this.usersService.getHeroes();
  }

}
