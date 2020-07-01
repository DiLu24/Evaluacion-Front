import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

export class Error implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
  styleUrls: ['./new-contacto.component.css']
})
export class NewContactoComponent implements OnInit {

  private titulo: string = 'Nuevo Contacto';
  form: FormGroup;
  nombre: FormControl;
  apellidoPat: FormControl;
  apellidoMat: FormControl;
  email: FormControl;
  matcher = new Error();
  
  constructor(
  private _usersService: UsersService,
  private router: Router
) { }

ngOnInit() {
  this.createFormControls();
  this.createForm();
}

createFormControls() {
  this.nombre = new FormControl('', [Validators.required, Validators.minLength(2)] );
  this.apellidoPat = new FormControl('', [Validators.required, Validators.minLength(2)] );
  this.apellidoMat = new FormControl('', [Validators.required, Validators.minLength(2)] );
  this.email = new FormControl('', [Validators.required, Validators.email] );
}

createForm(){
  this.form = new FormGroup({
    nombre: this.nombre,
    apellidoPat: this.apellidoPat,
    apellidoMat: this.apellidoMat,
    email: this.email
  });
}

send() {

  if ( this.form.valid ) {

    const usuario: any = {
      "id": String( Math.floor(Math.random() * (1000 - 1)) + 1 ),
      "data": {
          "nombre": this.form.value.nombre,
          "apellidoPat": this.form.value.apellidoPat,
          "apellidoMat": this.form.value.apellidoMat,
          "email": this.form.value.email
      }
    };
    this._usersService.addUser( usuario ).subscribe( () => this.router.navigate(['contactos']) );
  }
}

}
