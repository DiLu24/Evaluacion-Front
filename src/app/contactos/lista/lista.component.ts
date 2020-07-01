import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  public usuarios: any[] = [];

  constructor(
    private router: Router,
    private _usersService: UsersService) { }

  ngOnInit(): void {
    this.carga();
  }

  carga() {
    this._usersService.getUsers().subscribe( ( usuarios: any[] ) => {
      this.usuarios = usuarios;
    });
  }

  editar( id: number ) {
    this.router.navigate(['editarContacto', id]);
  }

  borrar( id: string ) {
    this._usersService.deletUser( id ).subscribe( () => {
      this.carga();
    });
  }
}
