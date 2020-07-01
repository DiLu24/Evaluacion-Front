import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class Error implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
    selector: 'app-editar',
    templateUrl: './new-contacto.component.html',
    styleUrls: ['./new-contacto.component.css']
  })

export class EditarComponent implements OnInit {

    private titulo: string = 'Editar Contacto';
    form: FormGroup;
    nombre: FormControl;
    apellidoPat: FormControl;
    apellidoMat: FormControl;
    email: FormControl;
    matcher = new Error();
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private _usersService: UsersService
    ) {
      this.activatedRoute.params.subscribe( params => {
        const id = params[ 'id' ];
        this.obtenerUser( id );
      });
    }
  
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
  
    obtenerUser( id: string ) {
      this._usersService.getUser( id ).subscribe( ( resp: any ) => {
        this.form.controls['nombre'].setValue( resp.data.nombre );
        this.form.controls['apellidoPat'].setValue( resp.data.apellidoPat );
        this.form.controls['apellidoMat'].setValue( resp.data.apellidoMat );
        this.form.controls['email'].setValue( resp.data.email );
      });
    }
  
    send() {
  
      console.log( "Editar" );
  
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
        this._usersService.updateUser( usuario ).subscribe();
  
      }
  
    }
  
  }